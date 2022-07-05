import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const TableRow = ({
  columns,
  bgColor,
  allGateways,
  gatewayOne,
  reports,
}) => (
  <Flex {...TableColumnsStyle(bgColor, allGateways)}>
    {columns.map((column, index) => (
      <Text
        {...ColumnStyle(allGateways, gatewayOne, index, reports)}
        key={column}
      >
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

const ColumnStyle = (allGateways, gatewayOne, reports, index) => ({
  w: allGateways && index === 0 && '105px',
  ml: gatewayOne && index === 1 && !reports && '40px',
});
