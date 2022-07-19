import { useRouter } from 'next/router'

export default function SlugPage() {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>
            <h1>Estamos en la Ruta: {slug}</h1>
        </div>
    )
}