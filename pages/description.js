import { useState, useEffect } from "react";
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/description.module.css'

// function resultSearch() {
//     window.location.href = `/comics?name=${nameHeroes}`;
//   }

export default function Description() {
   const [data, setData] = useState();

   let url
   let idHeroes

   if (typeof window !== 'undefined') {
      url = window.location?.href;
      idHeroes = url.split("id=")[1];
   }
   useEffect(() => {
      axios
         .get(
            `https://gateway.marvel.com:443/v1/public/characters/${idHeroes}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
         )
         .then((preview) => {
            setData(preview.data.data.results);
         });
   }, []);

   return (
      <div className={styles.Description}>
         <Head>
            <title>
               Marvel-Descrições
            </title>
         </Head>
         {data &&
            <>
               {data.map((heroes) => {
                  return (

                     <div className={styles.Main}>
                        <div className={styles.Header}>
                           <h1>{heroes.name}</h1>
                           <div className={styles.Img}>
                              <img
                                 src={`${heroes.thumbnail.path}.${heroes.thumbnail.extension}`}
                              />
                              {heroes.description ? (
                                 <p>{heroes.description}</p>
                              ) : (
                                 <p>Não existe nenhuma Descrição pra esse Personagem...</p>
                              )}

                           </div>
                        </div>

                        <section className={styles.DetailsFath}>

                           <div className={styles.Principal}>
                              <h1>Comics</h1>
                              {heroes.comics.items.map((comic) => {
                                 
                                 return (
                                    <a href={`/comics?=${comic.resourceURI}`}>
                                       <p>{comic.name}</p>
                                    </a>
                                 )
                              })}
                           </div>

                           <div className={styles.Principal}>
                              <h1>Events</h1>
                              {heroes.events.items.map((events) => {
                                 return (
                                    <a href={`/events?=${events.resourceURI}`}>
                                       <p>{events.name}</p>
                                    </a>
                                 )
                              })}
                           </div>

                           <div className={styles.Principal}>
                              <h1>Series</h1>
                              {heroes.series.items.map((series) => {
                                 return (
                                    <a href={`/series?=${series.resourceURI}`}>
                                       <p>{series.name}</p>
                                    </a>
                                 )
                              })}
                           </div>

                        </section>
                     </div>

                  )
               })
               }
            </>

         }

      </div>
   )
}