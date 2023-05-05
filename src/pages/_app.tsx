import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { appWithTranslation } from 'next-i18next'
import { Provider as ReduxProvider } from 'react-redux'

import { ProtectedLayout } from 'components/layout/ProtectedLayout'
import { store } from 'redux/store'
import 'styles/globals.css'
import 'styles/template.scss'

type AppPropsWithAuth = AppProps<{ session: Session }> & {
  Component: {
    requireAuth?: boolean
  }
}

const App = ({ Component, pageProps: { session, ...pageProps } }: AppPropsWithAuth) => {
  return (
    <ReduxProvider store={store}>
      <ConfigProvider>
        <StyleProvider hashPriority='high'>
          <SessionProvider session={session}>
            {Component.requireAuth ? (
              <ProtectedLayout>
                <Component {...pageProps} />
              </ProtectedLayout>
            ) : (
              <Component {...pageProps} />
            )}
          </SessionProvider>
        </StyleProvider>
      </ConfigProvider>
    </ReduxProvider>
  )
}

export default appWithTranslation(App)
