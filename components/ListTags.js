import { useAppContext } from '../context/StateWrapper'
import { calcularTagsAListar } from '../utils/index'
import styles from '../styles/ListTags.module.css'
import { Tag } from './Tag'

export function ListTags() {

    const { initialArticles } = useAppContext()

    return (
        <nav className={styles.list__tags}>
            {calcularTagsAListar(initialArticles).map(({ slug, text }) => (
                <Tag key={slug} slug={slug} text={text} />
            ))}
        </nav>
    )
}
