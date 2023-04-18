// import SeoHead from '../components/SeoHead'
import Layout from 'components/layout/Layout'
import Feature from 'components/template/Feature'
import Hero from 'components/template/Hero'
import Pricing from 'components/template/Pricing'

const Home = () => {
  return (
    <>
      {/* <SeoHead title='LaslesVPN Landing Page' /> */}
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  )
}
export default Home
