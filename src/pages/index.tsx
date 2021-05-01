import { useState } from 'react'
import Head from 'next/head'

import { GridFoods } from '../components/GridFoods'
import { Header } from '../components/Header'
import { ModalNewFood } from '../components/ModalNewFood'

export default function Home() {
  const [isOpenModalNewFood, setIsOpenModalNewFood] = useState(false)

  const toggleModalNewFood = () => setIsOpenModalNewFood(oldValue => !oldValue)

  return (
    <>
      <Head>
        <title>Go Restaurant</title>
      </Head>

      <Header openModal={toggleModalNewFood} />

      <GridFoods />

      <ModalNewFood isOpen={isOpenModalNewFood} onClose={toggleModalNewFood} />
    </>
  )
}
