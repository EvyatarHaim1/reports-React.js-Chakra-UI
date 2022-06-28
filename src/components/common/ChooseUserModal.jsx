import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Divider,
  Box,
  Text,
  ModalCloseButton,
} from '@chakra-ui/react';
import { messages } from '../../messages';

export const ChooseUserModal = () => {
  const { users, isOpenModal, closeModal } = useContext(AppContext);
  return (
    <Modal isOpen={isOpenModal} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{messages.titles.userModalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {messages.paragraphs.userModal}
          <Divider my="10px" />
          <Text fontWeight="bold" mb="15px">
            {messages.paragraphs.userQuantity} {users.length}
          </Text>
          {users?.map(({ userId, firstName, lastName, email }) => (
            <Box key={userId}>
              <Text>
                {messages.titles.userId} {userId}
              </Text>
              <Text>
                {messages.titles.firstName} {firstName}
              </Text>
              <Text>
                {messages.titles.lastName} {lastName}
              </Text>
              <Text>
                {messages.titles.email} {email}
              </Text>
            </Box>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
