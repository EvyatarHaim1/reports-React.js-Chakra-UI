import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const ProjectRow = ({ project, total }) => {
  <Flex {...ProjectRowStyle}>
    <Text {...ProjectTitleStyle}>{project}</Text>
    <Text {...ProjectTitleStyle}>{total}</Text>
  </Flex>;
};

const ProjectRowStyle = {
  justify: 'space-between',
  bgColor: 'white',
  w: '100%',
  p: '22px 24px 23px 24px',
  borderRadius: '10px',
};

const ProjectTitleStyle = {
  fontWeight: 'bold',
  color: 'blue.500',
};
