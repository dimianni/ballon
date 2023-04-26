import '@/styles/globals.scss'
import 'swiper/css';
import "swiper/css/navigation";
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
