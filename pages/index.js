import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaSearch } from "react-icons/fa"
import { useState } from 'react';
// import script from './scripts.js'

export default function Home() {
  const [nameHeroes, setNameHeroes] = useState();

  function resultSearch() {
    window.location.href = `/search?name=${nameHeroes}`;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel</title>
      </Head>
      <div className={styles.input}>
        <input type="text" placeholder="Digite Aqui Sua pesquisa" required onChange={(e) => {
          setNameHeroes(e.target.value);
        }} />

        <button
          className={styles.button}
          onClick={(event) => {
            event.preventDefault();
            resultSearch();
          }}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  )
}
