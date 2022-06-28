import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

import theme from "./theme/index";
import './theme/styles.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContentLayout } from './components/ContentLayout';
import { ChooseUserModal } from './components/common/ChooseUserModal';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <ChooseUserModal />
        <ContentLayout />
        <Footer />
      </Box>
    </ChakraProvider >
  );
}

export default App;
