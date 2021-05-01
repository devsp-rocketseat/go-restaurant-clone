import { FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import { ButtonGreen } from './ButtonGreen'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function ModalNewFood({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />

      <ModalContent
        width='100%'
        maxW='736px'
        mx='24px'
        p='40px'
        bg='#F0F0F5'
      >
        <ModalHeader fontSize='36px' p='0'>Novo Prato</ModalHeader>
        <ModalCloseButton />

        <ModalBody p='40px 0' >
          <FormControl>
            <FormLabel color='#6C6C80' fontSize='14px' fontWeight='normal'>URL da imagem</FormLabel>
            <Input placeholder="Cole o link aqui" h='56px' bg='#fff' border='none' />
          </FormControl>

          <HStack spacing={4} mt={6}>
            <FormControl flexGrow={1}>
              <FormLabel color='#6C6C80' fontSize='14px' fontWeight='normal'>Nome do prato</FormLabel>
              <Input placeholder="Ex: Moda Italiana" h='56px' bg='#fff' border='none' />
            </FormControl>

            <FormControl w='200px'>
              <FormLabel color='#6C6C80' fontSize='14px' fontWeight='normal'>Preço</FormLabel>
              <Input placeholder="R$" h='56px' bg='#fff' w='200px' border='none' />
            </FormControl>
          </HStack>

          <FormControl mt={6}>
            <FormLabel color='#6C6C80' fontSize='14px' fontWeight='normal'>Descrição do prato</FormLabel>
            <Input h='56px' bg='#fff' border='none' />
          </FormControl>
        </ModalBody>

        <ModalFooter p='0'>
          <ButtonGreen>
            Adicionar prato
            </ButtonGreen>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
