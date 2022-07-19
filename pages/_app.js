import '../styles/globals.css'

import StateWrapper from '../context/StateWrapper'

function MyApp({ Component, pageProps }) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  )
}

export default MyApp
