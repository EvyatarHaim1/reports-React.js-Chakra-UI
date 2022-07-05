import React, { useContext } from 'react';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react';

import AppContext from '../../contexts/AppContext';
import { messages } from '../../messages';

export const GatewaysModal = () => {
  const { gateways, isGatewayModal, closeGatewayModal } =
    useContext(AppContext);

  return (
    <Modal isOpen={isGatewayModal} onClose={closeGatewayModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{messages.titles.gatewayModalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            {!gateways ? (
              <Flex justify="center">{messages.paragraphs.fetchingErr}</Flex>
            ) : (
              <TableContainer>
                <Table variant="simple">
                  <TableCaption my="30px"></TableCaption>
                  <Thead>
                    <Tr>
                      <Th>{messages.table.gatewayId}</Th>
                      <Th>{messages.table.userIds}</Th>
                      <Th> {messages.table.name}</Th>
                      <Th> {messages.table.type}</Th>
                      <Th> {messages.table.apiKey}</Th>
                      <Th> {messages.table.secondaryApiKey}</Th>
                      <Th> {messages.table.description}</Th>
                    </Tr>
                  </Thead>
                  {gateways.map(gateway => (
                    <Tbody key={gateway.gatewayId}>
                      <Tr>
                        <Td>{gateway.gatewayId}</Td>
                        <Td>{gateway.userIds}</Td>
                        <Td> {gateway.name}</Td>
                        <Td>{gateway.type}</Td>
                        <Td>{gateway.apiKey}</Td>
                        <Td>{gateway.secondaryApiKey}</Td>
                        <Td>{gateway.description}</Td>
                      </Tr>
                    </Tbody>
                  ))}
                </Table>
              </TableContainer>
            )}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeGatewayModal}>
            {messages.buttons.close}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
