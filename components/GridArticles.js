import { CardArticle } from './CardArticle'
import styles from '../styles/GridArticles.module.css'
import { ListTags } from './ListTags'

export const GridArticles = ({ articles, tags }) => {
    return (
        <>
            <h2 className={styles.title}>Acumulado Grilla</h2>
            <div className={styles.container__list__tags}>
                <ListTags tags={tags} />
            </div>
            <div className={styles.container__articles}>
                {articles
                    .filter(article => article.subtype === '7')
                    .map(({ promo_items, display_date, headlines }, key) => (
                        <CardArticle
                            key={key}
                            image={promo_items?.basic.url}
                            date={display_date}
                            title={headlines?.basic}
                        />
                    ))}
            </div>
        </>
    )
}
