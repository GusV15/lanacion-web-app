import Image from 'next/image'
import { formatDate } from '../utils'
import styles from '../styles/CardArticle.module.css'

export function CardArticle({ image, date, title }) {
    const formatTitle = `${title[0]}${title.slice(1).toLowerCase()}`;
    return (
        <div className={styles.card__article}>
            <Image
                loader={() => image}
                src={image}
                alt="Imagen de Articulo"
                width={300}
                height={300}
            />
            <div className={styles.description}>
                <article>
                    <a href=''>
                        <b>{formatTitle}.</b> que tiene de escudo al Che Guevara y donde izan la bandera de Cuba
                    </a>
                </article>
                <span>{formatDate(date)}</span>
            </div>
        </div>
    )
}
