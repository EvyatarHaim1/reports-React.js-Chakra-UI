import React, { useState, useContext } from 'react';
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

export const ChooseUserModal = ({ isOpen, onClose }) => {
  const { users } = useContext(AppContext);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Choose A User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {messages.paragraphs.userModal}
          <Divider />
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
          <Button colorScheme="blue" mr={3} onClick={onClose()}>
            Close
          </Button>
          <Button variant="ghost">save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
