import { Button, Result, Row } from 'antd'
import { useRouter } from 'next/router'

import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'

const Custom404Page = () => {
  const router = useRouter()

  return (
    <Layout>
      <SEOHead title='404 Not Found' />
      <Row align='middle' justify='center' className='mt-24'>
        <Result
          status='404'
          title='404'
          subTitle='Sorry, the page you visited does not exist.'
          extra={
            <Button type='primary' onClick={() => router.replace('/')}>
              Back Home
            </Button>
          }
        />
      </Row>
    </Layout>
  )
}

export default Custom404Page
