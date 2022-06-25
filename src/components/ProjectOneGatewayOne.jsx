import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { messages } from '../messages';
import { TableRow } from './common/TableRow';

export const ProjectOneGatewayOne = () => (
  <>
    <Flex {...ContainerStyle}>
      <Heading {...TitleStyle}>{messages.titles.projectOneGatewayOne}</Heading>
      <TableRow
        gatewayOne
        columns={[
          messages.paragraphs.date,
          messages.paragraphs.transactionID,
          messages.paragraphs.amount,
        ]}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date2,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount2,
        ]}
      />
      <TableRow
        columns={[
          messages.paragraphs.date3,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount3,
        ]}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date4,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount4,
        ]}
      />
    </Flex>
    <Text {...ProjectTitleStyle}>{messages.paragraphs.totalBottom}</Text>
  </>
);

const ContainerStyle = {
  flexDirection: 'column',
  bgColor: 'lightBlue.100',
  p: '18px 27px 17px 19px',
  my: '27px',
  borderRadius: '10px',
};

const TitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  p: '18px 0px 34px 24px',
};

const ProjectTitleStyle = {
  h: '53px',
  borderRadius: '10px',
  p: '17px 0px 17px 19px',
  mb: '50px',
  fontWeight: 'bold',
  color: 'blue.500',
  bgColor: 'lightBlue.100',
};
