import Layout from '@/layouts/Default'

export default function MyApp ({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}