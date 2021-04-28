import { Box, Flex } from '@chakra-ui/react'
import { Button } from '../Button'

export function Header() {
  return (
    <Box w='100%' h='281px' bg='#C72828' pt='40px'>
      <Flex
        maxW='1120px'
        mx='auto'
        align='center'
        justify='space-between'
      >
        <img src="Logo.svg" alt="logo" />

        <Button>Novo Prato</Button>
      </Flex>
    </Box>
  )
}
