import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';

export const AllProjects = () => {
  return (
    <>
      <Flex {...ContainerStyle}>
        <Box mb="34px">
          <Heading {...TitleStyle}>{messages.titles.allProjects}</Heading>
        </Box>
        <Flex {...ProjectRowStyle}>
          <Text {...ProjectTitleStyle}>{messages.titles.project1}</Text>
          <Text {...ProjectTitleStyle}>{messages.paragraphs.totalTop}</Text>
        </Flex>
        <Flex {...TableColumnsStyle}>
          <Text>{messages.paragraphs.date}</Text>
          <Text>{messages.paragraphs.gateway1}</Text>
          <Text>{messages.paragraphs.transactionID} </Text>
          <Text>{messages.paragraphs.amount} </Text>
        </Flex>
      </Flex>
      <Text>{messages.paragraphs.totalBottom}</Text>
    </>
  );
};

const ContainerStyle = {
  flexDirection: 'column',
  bgColor: 'lightBlue.100',
  p: '71px 27px 17px 19px',
};

const TitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
};

const ProjectRowStyle = {
  justify: 'space-between',
  bgColor: 'white',
  w: '100%',
  p: '22px 24px 23px 24px',
  borderRadius: '10px',
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

const ProjectTitleStyle = {
  fontWeight: 'bold',
  color: 'blue.500',
};
