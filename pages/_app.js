import Layout from '@/layouts/Default'
import '@/styles/config.css'
import '@/styles/main.css'

export default function MyApp ({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}