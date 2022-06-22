import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

import theme from "./theme/index";
import './theme/styles.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContentLayout } from './components/ContentLayout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box {...AppContainer}>
        <Header />
        <ContentLayout />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;


const AppContainer = {
  h: '100vh',
}