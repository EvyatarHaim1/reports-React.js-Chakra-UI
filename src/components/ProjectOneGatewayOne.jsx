import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { messages } from '../messages';
import { TableRow } from './common/TableRow';
import { TitleStyle, TotalBottomSectionStyle } from '../theme/classes';

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
          messages.paragraphs.amount1,
        ]}
      />
      <TableRow
        columns={[
          messages.paragraphs.date3,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount2,
        ]}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date4,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount3,
        ]}
      />
    </Flex>
    <Text {...TotalBottomSectionStyle}>{messages.paragraphs.totalBottom}</Text>
  </>
);

const ContainerStyle = {
  flexDirection: 'column',
  bgColor: 'lightBlue.100',
  p: '18px 27px 17px 19px',
  my: '27px',
  borderRadius: '10px',
};
