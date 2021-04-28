import { Box, Button, Flex, Icon, Link, Text } from '@chakra-ui/react'
// import { Button } from '../Button'
import { FiPlusSquare } from 'react-icons/fi'

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

        <Link
          borderRadius='8px'
          bg='#39B100'
          color='#fff'
          display='flex'
          align='center'
          overflow='hidden'
        >
          <Text
            as='span'
            fontSize='16px'
            fontWeight='semibold'
            p='16px 24px'
          >
            Novo Prato
          </Text>

          <Box bg='#41C900' p='16px'>
            <Icon as={FiPlusSquare} fontSize='24px' />
          </Box>
        </Link>
      </Flex>
    </Box>
  )
}
