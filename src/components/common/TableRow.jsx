import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const TableRow = ({ columns, bgColor, firstRow }) => (
  <Flex {...TableColumnsStyle(bgColor, firstRow)}>
    {columns.map((column, index) => (
      <Text w={firstRow && index === 0 && '105px'} key={column}>
        {column}
      </Text>
    ))}
  </Flex>
);

const TableColumnsStyle = bgColor => ({
  mt: '14px',
  bgColor: bgColor ? bgColor : 'white',
  w: '100% - 15.2px',
  ml: '15.2px',
  color: 'blue.500',
  justify: 'space-between',
  p: '5px 25px 4px 5.76px',
});
