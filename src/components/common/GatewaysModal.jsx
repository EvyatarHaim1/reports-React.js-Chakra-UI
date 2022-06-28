import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import {
  Image,
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
} from '@chakra-ui/react';
import { messages } from '../../messages';

export const GatewaysModal = () => {
  const { gateways, isGatewayModal, closeGatewayModal } =
    useContext(AppContext);
  return (
    <Modal
      w="100vw"
      h="100vh"
      isOpen={isGatewayModal}
      onClose={closeGatewayModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{messages.titles.gatewayModalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <TableContainer>
              <Table variant="simple">
                <TableCaption my="30px"></TableCaption>
                <Thead>
                  <Tr>
                    <Th>gatewayId</Th>
                    <Th>userIds</Th>
                    <Th> name</Th>
                    <Th> type</Th>
                    <Th> apiKey</Th>
                    <Th> secondaryApiKey</Th>
                    <Th> description</Th>
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
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeGatewayModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
