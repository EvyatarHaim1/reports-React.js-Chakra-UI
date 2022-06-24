import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const TableRow = ({ columns }) => {
  return (
    <Flex {...TableColumnsStyle}>
      {columns.map(column => (
        <Text key={column}>{column}</Text>
      ))}
    </Flex>
  );
};

const TableColumnsStyle = {
  mt: '14px',
  bgColor: 'white',
  w: '100% - 15.2px',
  ml: '15.2px',
  color: 'blue.500',
  justify: 'space-between',
  p: '5px 25px 4px 5.76px',
};
