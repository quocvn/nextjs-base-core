import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from 'redux/store'
import 'styles/globals.css'
import 'styles/template.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
