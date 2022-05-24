import '../styles/globals.css'
import Layout from '../components/layout'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    <Footer/>
    </Layout>
    
}

export default MyApp
