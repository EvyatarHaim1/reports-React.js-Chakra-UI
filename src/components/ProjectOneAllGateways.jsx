import React, { useContext, useEffect, useState } from 'react';
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
import { MockProjectOneAllGateways } from './mocks/MockProjectOneAllGateways';
import AppContext from '../contexts/AppContext';

export const ProjectOneAllGateways = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [gatewaysTotal, setGatewaysTotal] = useState(0);
  const { reports, postReport, projects, gateways } = useContext(AppContext);

  useEffect(() => {
    postReport({
      projectId: projects[0].projectId,
    });
    let amount = 0;
    if (reports) {
      reports.map(report => (amount += Math.round(report.amount)));
      setTotalAmount(amount);
    }
  }, [gateways, postReport, projects, reports]);

  return (
    <Flex {...ContainerStyle}>
      <Flex {...LeftBlockStyle}>
        <Heading {...TitleStyle}>
          {messages.titles.projectOneAllGateways}
        </Heading>
        <ProjectRow
          project={messages.paragraphs.gateway1}
          total={
            !reports ? (
              messages.paragraphs.totalTop
            ) : (
              <>
                {messages.paragraphs.total} {totalAmount}{' '}
                {messages.paragraphs.dollar}
              </>
            )
          }
        />
        <TableRow
          gatewayOne
          columns={[
            messages.paragraphs.date,
            messages.paragraphs.transactionID,
            messages.paragraphs.amount,
          ]}
        />
        {reports ? (
          <MockProjectOneAllGateways />
        ) : (
          reports.map((report, index) => (
            <TableRow
              bgColor={index % 2 === 0 && 'lightBlue.100'}
              columns={[report.created, report.paymentId, report.amount]}
            />
          ))
        )}
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
        <Text {...TotalTextStyle}>
          {!gateways ? (
            messages.paragraphs.gatewayTotal
          ) : (
            <>
              {messages.paragraphs.total} {gatewaysTotal}{' '}
              {messages.paragraphs.dollar}
            </>
          )}
        </Text>
      </Flex>
    </Flex>
  );
};

const ContainerStyle = {
  w: '100%',
  mb: '50px',
};
