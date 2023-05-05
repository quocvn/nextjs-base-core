import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import Feature from 'components/template/Feature'
import Hero from 'components/template/Hero'
import Pricing from 'components/template/Pricing'

type Props = {
  // Add custom props here
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const Home = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <SEOHead title='My page example' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  )
}

Home.requireAuth = true
export default Home
