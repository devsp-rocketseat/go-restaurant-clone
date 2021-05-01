import { Box, Flex } from '@chakra-ui/react'
import { ButtonGreen } from '../ButtonGreen'

interface Props {
  openModal: () => void
}

export function Header({ openModal }: Props) {
  return (
    <Box w='100%' h='281px' bg='#C72828' pt='40px'>
      <Flex
        maxW='1120px'
        mx='auto'
        align='center'
        justify='space-between'
      >
        <img src="Logo.svg" alt="logo" />

        <ButtonGreen onClick={openModal}>
          Novo Prato
        </ButtonGreen>
      </Flex>
    </Box>
  )
}
