import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection';

export const ContentLayout = () => {
  return (
    <HStack>
      <Sidebar />
      <Box>
        <TopSection />
      </Box>
    </HStack>
  );
};
