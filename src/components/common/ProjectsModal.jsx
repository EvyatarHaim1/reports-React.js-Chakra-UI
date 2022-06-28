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

export const ProjectsModal = () => {
  const { projects, isProjectModal, closeProjectModal } =
    useContext(AppContext);
  return (
    <Modal
      w="100vw"
      h="100vh"
      isOpen={isProjectModal}
      onClose={closeProjectModal}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{messages.titles.projectModalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <TableContainer>
              <Table variant="simple">
                <TableCaption my="30px"></TableCaption>
                <Thead>
                  <Tr>
                    <Th>projectId</Th>
                    <Th>userIds</Th>
                    <Th> rule</Th>
                    <Th> gatewayIds</Th>
                    <Th> structure</Th>
                    <Th> industry</Th>
                    <Th> website</Th>
                    <Th> description</Th>
                    <Th> image</Th>
                    <Th> name</Th>
                  </Tr>
                </Thead>
                {projects.map(project => (
                  <Tbody key={project.projectId}>
                    <Tr>
                      <Td>{project.projectId}</Td>
                      <Td>{project.userIds}</Td>
                      <Td> {project.rule}</Td>
                      <Td>{project.gatewayIds}</Td>
                      <Td>{project.structure}</Td>
                      <Td>{project.industry}</Td>
                      <Td>{project.website}</Td>
                      <Td>{project.description}</Td>
                      <Td>
                        <Image src={project.image} alt="img" />
                      </Td>
                      <Td>{project.name}</Td>
                    </Tr>
                  </Tbody>
                ))}
              </Table>
            </TableContainer>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={closeProjectModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
