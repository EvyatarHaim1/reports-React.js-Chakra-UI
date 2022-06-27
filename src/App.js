import React from 'react';
import { Box, ChakraProvider, useDisclosure } from '@chakra-ui/react';

import theme from "./theme/index";
import './theme/styles.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContentLayout } from './components/ContentLayout';
import { ChooseUserModal } from './components/common/ChooseUserModal';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header onOpen={onOpen} />
        <ChooseUserModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <ContentLayout />
        <Footer />
      </Box>
    </ChakraProvider >
  );
}

export default App;
