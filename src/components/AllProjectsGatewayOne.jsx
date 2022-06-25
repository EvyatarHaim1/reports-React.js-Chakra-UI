import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { projectsIndex } from '../helpers';
import { ProjectColorIndex } from './common/ProjectColorIndex';
import CustomPieChart from './common/PieChart';
import { TableRow } from './common/TableRow';
import { ProjectRow } from './common/ProjectRow';

export const AllProjectsGatewayOne = () => (
  <Flex w="100%" mb="107px">
    <Flex {...LeftBlockStyle}>
      <Heading {...TitleStyle}>{messages.titles.allProjectsGatewayOne}</Heading>
      <ProjectRow
        project={messages.titles.project1}
        total={messages.paragraphs.totalTop}
      />
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

    <Flex {...RightBlockStyle}>
      <Flex {...ButtonSectionStyle}>
        {projectsIndex.map(({ name, color }) => (
          <Flex key={name} align="center">
            <ProjectColorIndex color={color} />
            <Text {...ProjectTextStyle}>{name}</Text>
          </Flex>
        ))}
      </Flex>

      <Box mx="auto" mt="94px" mb="87.5pxs" flex="1">
        <CustomPieChart />
      </Box>
      <Text {...TotalTextStyle}>{messages.paragraphs.gatewayTotal}</Text>
    </Flex>
  </Flex>
);

const LeftBlockStyle = {
  p: '0px 15px 17px 19px',
  bgColor: 'lightBlue.100',
  borderRadius: '10px',
  flexDirection: 'column',
  w: '50%',
  mr: '31px',
};

const RightBlockStyle = {
  flexDirection: 'column',
  w: '50%',
};

const ButtonSectionStyle = {
  justify: 'space-evenly',
  bgColor: 'lightBlue.100',
  p: '19px 34px 18px 23px',
  borderRadius: '10px',
};

const ProjectTextStyle = {
  pl: '12px',
  fontSize: '14px',
  color: 'blue.500',
};

const TitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  p: '18px 0px 34px 24px',
};

const TotalTextStyle = {
  flex: 0,
  color: 'blue.500',
  fontWeight: 'bold',
  bgColor: 'lightBlue.100',
  p: '19px 34px 18px 23px',
  borderRadius: '10px',
};
