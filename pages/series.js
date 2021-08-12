import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/events.module.css'

export default function series() {
    const [data, setData] = useState();

    let url
    let idSeries

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        idSeries = url.split("/series?=")[1];
    }

    useEffect(() => {
        axios.get(`${idSeries}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`)
            .then((preview) => {
                setData(preview.data.data.results);
            })
    }, [])

    console.log(data, 'data');

    return (
        <div>
            <Head>
                <title>
                    Marvel-Séries
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
                                        <img
                                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                        />
                                        <p>{item.description}</p>
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