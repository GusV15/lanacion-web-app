import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { GridArticles } from '../components/GridArticles'
import { Header } from '../components/Header'
import { getArticles } from '../services/storeService'
import { agruparTagsArticulos, ordenarPorCantidad, ordenarPorRepetidos } from '../utils/index'
import styles from '../styles/Home.module.css'



export default function Home({ articles }) {
  const arrayTags = agruparTagsArticulos(articles)
  const arrayUnico = ordenarPorRepetidos(arrayTags);
  const arrayOrdenadoPorCantidad = ordenarPorCantidad(arrayUnico)
  const arrayPrimeros10Tags = arrayOrdenadoPorCantidad.splice(0, 10)
  console.log(arrayPrimeros10Tags);
  return (
    <div className={styles.container}>
      <Head>
        <title>La Nación</title>
        <meta name="description" content="especiales.lanacion.com.ar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* A partir del tag main de html, componentizar todos los elementos 
      que considere necesario. */}
      <main className={styles.main}>
        <Header />
        <Banner />
        <GridArticles tags={arrayPrimeros10Tags} articles={articles} />
      </main>
      <Footer />
    </div>
  )
}


export async function getServerSideProps() {
  const articles = await getArticles();
  return { props: articles }
}
