import { createContext, useContext, useState } from 'react'

const AppContext = createContext({
    articles: [],
    tags: []
})

export default function StateWrapper({ children }) {
    const [articles, setArticles] = useState([])
    const [tags, setTags] = useState([])

    return (
        <AppContext.Provider
            value={{
                articles,
                setArticles,
                tags,
                setTags
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}