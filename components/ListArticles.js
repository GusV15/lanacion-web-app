import { CardArticle } from './CardArticle'
import { useAppContext } from '../context/StateWrapper'


export function ListArticles() {

    const { initialArticles } = useAppContext()

    return (
        <>
            {initialArticles
                .filter(article => article.subtype === '7')
                .map(({ promo_items, display_date, headlines }, key) => (
                    <CardArticle
                        key={key}
                        image={promo_items?.basic.url}
                        date={display_date}
                        title={headlines?.basic}
                    />
                ))}
        </>
    )
}