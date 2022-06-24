import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';

export const AllProjectsAllGateways = () => {
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
        <Flex {...TableColumnsStyle}>
          <Text>{messages.paragraphs.date2}</Text>
          <Text>{messages.paragraphs.gateway2}</Text>
          <Text>{messages.paragraphs.transactionExp} </Text>
          <Text>{messages.paragraphs.amount2} </Text>
        </Flex>
        <Flex {...TableColumnsStyle}>
          <Text>{messages.paragraphs.date3}</Text>
          <Text>{messages.paragraphs.gateway3}</Text>
          <Text>{messages.paragraphs.transactionExp} </Text>
          <Text>{messages.paragraphs.amount3} </Text>
        </Flex>
        <Flex {...TableColumnsStyle}>
          <Text>{messages.paragraphs.date4}</Text>
          <Text>{messages.paragraphs.gateway4}</Text>
          <Text>{messages.paragraphs.transactionExp} </Text>
          <Text>{messages.paragraphs.amount4} </Text>
        </Flex>
        <Flex {...ProjectRowStyle}>
          <Text {...ProjectTitleStyle}>{messages.titles.project2}</Text>
          <Text {...ProjectTitleStyle}>{messages.paragraphs.projectTotal}</Text>
        </Flex>
        <Flex {...ProjectRowStyle}>
          <Text {...ProjectTitleStyle}>{messages.titles.project3}</Text>
          <Text {...ProjectTitleStyle}>{messages.paragraphs.projectTotal}</Text>
        </Flex>
        <Flex {...ProjectRowStyle}>
          <Text {...ProjectTitleStyle}>{messages.titles.project4}</Text>
          <Text {...ProjectTitleStyle}>{messages.paragraphs.projectTotal}</Text>
        </Flex>
      </Flex>
      <Text {...ProjectTitleStyle}>{messages.paragraphs.totalBottom}</Text>
    </>
  );
};

const ContainerStyle = {
  flexDirection: 'column',
  bgColor: 'lightBlue.100',
  p: '18px 27px 17px 19px',
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
