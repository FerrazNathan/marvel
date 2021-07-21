import { useState, useEffect } from "react";
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/search.module.css'

export default function Search() {
    const [data, setData] = useState();

    function resultSearch() {
        window.location.href = `/description?name=${nameHeroes}` ;
    }

    let url
    let nameHeroes

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        nameHeroes = url.split("name=")[1];
    }

    useEffect(() => {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHeroes}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
            )
            .then((preview) => {
                setData(preview.data.data.results);
            });
    }, []);

    console.log(data);

    return (

        <div className={styles.DetailsFath}>

            <Head>
                <title>
                    Marvel-Heróis
                </title>
            </Head>

            {data &&
                <div className={styles.Details}>
                    {data.map((heroes) => {
                        return (
                            <div>
                                <div className={styles.DetailsHero}>
                                    <a href={`/description?id=${heroes.id}`}>
                                        <h1>{heroes.name}</h1>
                                        <img
                                            src={`${heroes.thumbnail.path}.${heroes.thumbnail.extension}`}
                                        />
                                    </a>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

            }

        </div>
    )
}