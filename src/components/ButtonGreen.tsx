import { ReactNode } from 'react'
import { Box, Icon, Link, Text } from '@chakra-ui/react'
import { FiPlusSquare } from 'react-icons/fi'

interface props {
  children: ReactNode
  onClick?: () => void
}

export function ButtonGreen({ children, onClick }: props) {
  return (
    <Link
      borderRadius='8px'
      bg='#39B100'
      color='#fff'
      display='flex'
      align='center'
      overflow='hidden'
      onClick={onClick}
    >
      <Text
        as='span'
        fontSize='16px'
        fontWeight='semibold'
        p='16px 24px'
      >
        {children}
      </Text>

      <Box bg='#41C900' p='16px'>
        <Icon as={FiPlusSquare} fontSize='24px' />
      </Box>
    </Link>
  )
}
