import React, { useEffect, useState } from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

import theme from "./theme/index";
import './theme/styles.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContentLayout } from './components/ContentLayout';
import { fetchGateways, fetchProjects, fetchUsers } from './api/fetchUsers';

function App() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [report, setreport] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchGateways();
    fetchProjects();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <ContentLayout />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
