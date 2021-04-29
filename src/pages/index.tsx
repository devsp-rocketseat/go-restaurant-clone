import Head from 'next/head'
import { GridFoods } from '../components/GridFoods'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Go Restaurant</title>
      </Head>

      <Header />

      <GridFoods />
    </>
  )
}
