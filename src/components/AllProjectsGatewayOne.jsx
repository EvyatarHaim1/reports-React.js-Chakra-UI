import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { projectsIndex } from '../helpers';
import { ProjectColorIndex } from './common/ProjectColorIndex';
import CustomPieChart from './common/PieChart';
import { TableRow } from './common/TableRow';
import { ProjectRow } from './common/ProjectRow';
import {
  ButtonSectionStyle,
  LeftBlockStyle,
  PieChartStyle,
  ProjectTextStyle,
  RightBlockStyle,
  TitleStyle,
  TotalTextStyle,
} from '../theme/classes';

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
      <ProjectRow
        topSpace
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

      <Box {...PieChartStyle}>
        <CustomPieChart />
      </Box>
      <Text {...TotalTextStyle}>{messages.paragraphs.gatewayTotal}</Text>
    </Flex>
  </Flex>
);
