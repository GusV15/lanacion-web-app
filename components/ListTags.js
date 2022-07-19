import Link from "next/link"
import styles from '../styles/ListTags.module.css'

export const ListTags = ({ tags }) => {
    return (
        <nav className={styles.list__tags}>
            {tags.map(({ slug, text }) => (
                <Link href={`/tema/${slug}`} key={slug}>
                    <a>
                        {text}
                    </a>
                </Link>
            ))}
        </nav>
    )
}
