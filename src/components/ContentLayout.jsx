import { Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import Content from './Content';
import { Sidebar } from './Sidebar';
import { TopSection } from './TopSection';

export const ContentLayout = () => {
  return (
    <HStack pr="100px" flex="1" align="start">
      <Sidebar />
      <Flex flex="1" flexDirection="column">
        <TopSection />
        <Content />
      </Flex>
    </HStack>
  );
};
