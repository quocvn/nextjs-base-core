import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '../redux/store'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <StyleProvider hashPriority='high'>
          <Component {...pageProps} />
        </StyleProvider>
      </ConfigProvider>
    </Provider>
  )
}

export default App
