import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const ProjectRow = ({ project, total, noTopSpace }) => (
  <Flex {...ProjectRowStyle(noTopSpace)}>
    <Text {...ProjectTitleStyle}>{project}</Text>
    <Text {...ProjectTitleStyle}>{total}</Text>
  </Flex>
);

const ProjectRowStyle = noTopSpace => ({
  justify: 'space-between',
  bgColor: 'white',
  w: '100%',
  p: '22px 24px 23px 24px',
  borderRadius: '10px',
  mt: noTopSpace ? '0px' : '5px',
});

const ProjectTitleStyle = {
  fontWeight: 'bold',
  color: 'blue.500',
};
