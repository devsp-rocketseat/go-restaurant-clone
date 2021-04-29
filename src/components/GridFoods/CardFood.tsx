import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Icon, Image, Switch, Text } from '@chakra-ui/react'
import { FiEdit3, FiTrash } from 'react-icons/fi'

interface Props {
  image: string
  title: string
  description: string
  amount: string
  isAvailable: boolean
  // handleEdit: () => void
  // handleDelete: () => void
  // handleAvailability: () => void
}

export function CardFood({ image, title, description, amount, isAvailable }: Props) {
  return (
    <Box borderRadius='8px' overflow='hidden' bg='#F0F0F5'>
      <Box pt='32px' bg='#FFB84C' opacity={isAvailable ? 1 : 0.5}>
        <Image src={image} alt='prato' mx='auto' />
      </Box>

      <Box m='32px 30px 28px'>
        <Heading size='md'>{title}</Heading>
        <Text my='16px'>{description}</Text>

        <Text color={isAvailable && 'green'}>R$ <b>{amount}</b></Text>
      </Box>

      <Flex w='100%' bg='#E4E4EB' p='20px 32px' align='center' justify='space-between'>
        <HStack>
          <Button p='10px' bg='#fff'>
            <Icon as={FiEdit3} color='#3D3D4D' />
          </Button>

          <Button p='10px' bg='#fff'>
            <Icon as={FiTrash} color='#3D3D4D' />
          </Button>
        </HStack>

        <FormControl w='fit-content' display='flex' alignItems='center'>
          <FormLabel htmlFor='foodAvailable' mb='0' fontWeight='normal'>
            Disponível
          </FormLabel>

          <Switch id='foodAvailable' size='lg' colorScheme='green' isChecked={isAvailable} />
        </FormControl>
      </Flex>
    </Box>
  )
}
