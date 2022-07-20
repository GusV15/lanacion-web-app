import { Banner } from './Banner'
import { ListTags } from './ListTags'
import { ListArticles } from './ListArticles'

import styles from '../styles/Main.module.css'

export function Main() {
    return (
        <>
            <Banner />
            <h2 className={styles.title}>Acumulado Grilla</h2>
            <div className={styles.container__list__tags}>
                <ListTags />
            </div>
            <div className={styles.container__articles}>
                <ListArticles />
            </div>
        </>
    )
}
