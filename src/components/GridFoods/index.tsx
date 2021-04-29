import { Grid } from '@chakra-ui/react'

import { CardFood } from './CardFood'

export function GridFoods() {
  return (
    <Grid
      w='100%'
      maxW='1120px'
      mx='auto'
      m='-100px auto 150px'
      templateColumns='repeat(3, 1fr)'
      gap='48px 32px'
    >
      <CardFood
        image='images/Ao Molho.png'
        title='Ao Molho'
        description='Macarrão ao molho branco, fughi e cheiro verde das montanhas.'
        amount='19,90'
        isAvailable={true}
      />

      <CardFood
        image='images/Veggie.png'
        title='Veggie'
        description='Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.'
        amount='19,90'
        isAvailable={true}
      />

      <CardFood
        image='images/Camarão.png'
        title='A la Camarón'
        description='Macarrão com vegetais de primeira linha e camarão dos 7 mares.'
        amount='19,90'
        isAvailable={false}
      />

      <CardFood
        image='images/Veggie.png'
        title='Veggie'
        description='Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.'
        amount='19,90'
        isAvailable={true}
      />
    </Grid>
  )
}
