import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/pages.module.css'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io'

export default function events() {
   const [data, setData] = useState();

   let url
   let idEvents

   if (typeof window !== 'undefined') {
      url = window.location?.href;
      idEvents = url.split("/events?=")[1];
   }

   useEffect(() => {
      axios.get(`${idEvents}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`)
         .then((preview) => {
            setData(preview.data.data.results);
         })
   }, [])

   return (
      <div>
         <Head>
            <title>
               Marvel-Events
            </title>
         </Head>

         {
            data &&
            <>
               {
                  data.map((item) => {
                     return (
                        <div className={styles.Main}>
                           <h1>{item.title}</h1>
                           <div className={styles.Img}>
                              <div className={styles.FatherImg}>
                                 <IoIosArrowDropleftCircle />
                                 <img
                                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                 />
                                 <IoIosArrowDroprightCircle />
                              </div>
                              {item.description ? (
                                 <p>{item.description}</p>
                              ) : (
                                 <p>Não existe nenhuma Descrição pra esse Evento...</p>
                              )}
                           </div>

                        </div>
                     )
                  })
               }
            </>
         }

      </div>
   )
}
