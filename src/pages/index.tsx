import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Restaurant</title>
      </Head>

      <Header />

      <h1>Hello World</h1>
    </>
  )
}
