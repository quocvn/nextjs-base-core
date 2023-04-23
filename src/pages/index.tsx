import Layout from 'components/layout/Layout'
import SEOHead from 'components/seo'
import Feature from 'components/template/Feature'
import Hero from 'components/template/Hero'
import Pricing from 'components/template/Pricing'

const Home = () => {
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
export default Home
