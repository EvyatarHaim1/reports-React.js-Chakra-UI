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
  const [title, setTitle] = useState(messages.titles.projectOneAllGateways);

  const {
    reports,
    postReport,
    projects,
    gateways,
    projectsState,
    gatewaysState,
    setCurrentScreen,
  } = useContext(AppContext);

  useEffect(() => {
    postReport({
      projectId:
        projects[Number(projectsState.charAt(projectsState.length - 1)) - 1]
          ?.projectId,
    });
    let amount = 0;
    if (reports) {
      reports.map(report => (amount += Math.round(report.amount)));
      setTotalAmount(amount);
    }
    setTitle(`${projectsState} | ${gatewaysState}`);
  }, [gateways, gatewaysState, postReport, projects, projectsState, reports]);

  return (
    <Flex {...ContainerStyle}>
      <Flex {...LeftBlockStyle}>
        <Heading {...TitleStyle}>{title}</Heading>
        {!reports // <MockProjectOneAllGateways />
          ? setCurrentScreen('Report')
          : gateways.map(gateway => (
              <>
                <ProjectRow
                  key={gateway.name}
                  project={gateway.name}
                  total={
                    <>
                      {messages.paragraphs.total} {totalAmount}{' '}
                      {messages.paragraphs.dollar}
                    </>
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
                {reports
                  .filter(
                    r =>
                      r.gatewayId.toLowerCase() ===
                      gateway.gatewayId.toLowerCase()
                  )
                  .map((report, index) => (
                    <TableRow
                      key={report.paymentId}
                      bgColor={index % 2 === 0 && 'lightBlue.100'}
                      columns={[
                        report.created,
                        report.paymentId,
                        report.amount,
                      ]}
                    />
                  ))}
              </>
            ))}
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
              {messages.paragraphs.total} {totalAmount}{' '}
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
