import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { ProjectColorIndex } from './common/ProjectColorIndex';
import { TableRow } from './common/TableRow';
import { ProjectRow } from './common/ProjectRow';
import { gatewaysIndex } from '../helpers';
import {
  ButtonSectionStyle,
  LeftBlockStyle,
  PieChartStyle,
  ProjectTextStyle,
  RightBlockStyle,
  TitleStyle,
  TotalTextStyle,
} from '../theme/classes';
import CustomPieChart from './common/PieChart';

export const ProjectOneAllGateways = () => (
  <Flex {...ContainerStyle}>
    <Flex {...LeftBlockStyle}>
      <Heading {...TitleStyle}>{messages.titles.projectOneAllGateways}</Heading>
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
        {gatewaysIndex.map(({ name, color }) => (
          <Flex key={name} align="center">
            <ProjectColorIndex color={color} />
            <Text {...ProjectTextStyle}>{name}</Text>
          </Flex>
        ))}
      </Flex>

      <Box {...PieChartStyle}>
        <CustomPieChart />
      </Box>
      <Text {...TotalTextStyle}>{messages.paragraphs.projectTotal}</Text>
    </Flex>
  </Flex>
);

const ContainerStyle = {
  w: '100%',
  mb: '50px',
};
