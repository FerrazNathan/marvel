import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaSearch} from "react-icons/fa"

export default function Home() {
  const [nameHeroes]
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Marvel</title>
      </Head>
      <div className={styles.input}>
        <input type= "text" placeholder= "Digite Aqui Sua pesquisa"></input>

        <button 
          className={styles.button}

        >
          <FaSearch />
        </button>
      </div>
    </div>
  )
}
