import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { ProjectRow } from './common/ProjectRow';
import { TableRow } from './common/TableRow';

export const AllProjectsAllGateways = () => (
  <>
    <Flex {...ContainerStyle}>
      <Box mb="34px">
        <Heading {...TitleStyle}>{messages.titles.allProjects}</Heading>
      </Box>
      <ProjectRow
        project={messages.titles.project1}
        total={messages.paragraphs.totalTop}
      />
      <TableRow
        firstRow
        columns={[
          messages.paragraphs.date,
          messages.paragraphs.gateway1,
          messages.paragraphs.transactionID,
          messages.paragraphs.amount,
        ]}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date2,
          messages.paragraphs.gateway2,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount2,
        ]}
      />
      <TableRow
        columns={[
          messages.paragraphs.date3,
          messages.paragraphs.gateway3,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount3,
        ]}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date4,
          messages.paragraphs.gateway4,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount4,
        ]}
      />
      <ProjectRow
        noTopSpace
        project={messages.titles.project2}
        total={messages.paragraphs.rowTotal}
      />
      <ProjectRow
        project={messages.titles.project3}
        total={messages.paragraphs.rowTotal}
      />
      <ProjectRow
        project={messages.titles.project4}
        total={messages.paragraphs.rowTotal}
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
};

const TitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
};

const ProjectTitleStyle = {
  fontWeight: 'bold',
  color: 'blue.500',
  bgColor: 'lightBlue.100',
};
