import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'

import { store } from 'redux/store'
import 'styles/globals.css'
import 'styles/template.scss'

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ConfigProvider>
          <StyleProvider hashPriority='high'>
            <Component {...pageProps} />
          </StyleProvider>
        </ConfigProvider>
      </Provider>
    </SessionProvider>
  )
}

export default App
