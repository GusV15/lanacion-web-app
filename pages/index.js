import Head from 'next/head'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { getArticles } from '../services/storeService'
import { useEffect } from 'react'
import { useAppContext } from '../context/StateWrapper'
import styles from '../styles/Home.module.css'



export default function Home({ articles }) {
  const { setInitialArticles } = useAppContext()

  useEffect(() => {
    setInitialArticles(articles)
  }, [setInitialArticles, articles])

  return (
    <div className={styles.container}>
      <Head>
        <title>La Nación</title>
        <meta name="description" content="especiales.lanacion.com.ar" />
        <link rel="icon" href="/lanacion.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

/**
 * Función que se ejecuta en el servidor en cada peticion que se realiza (SSR).
 * @returns retorna las props que van a hidratar al cliente
 */
export async function getServerSideProps() {
  const articles = await getArticles();
  return { props: articles }
}
