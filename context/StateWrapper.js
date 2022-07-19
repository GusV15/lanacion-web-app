import { createContext, useContext, useState } from 'react'

const AppContext = createContext({
    initialArticles: []
})

export default function StateWrapper({ children }) {
    const [initialArticles, setInitialArticles] = useState([])

    return (
        <AppContext.Provider
            value={{
                initialArticles,
                setInitialArticles,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}