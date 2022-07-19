import Link from "next/link"

export function Tag({ slug, text }) {
    return (
        <Link href={`/tema/${slug}`} key={slug}>
            <a className='anchor'>
                {text}
            </a>
        </Link>
    )
}