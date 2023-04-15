import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority='high'>
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  )
}
