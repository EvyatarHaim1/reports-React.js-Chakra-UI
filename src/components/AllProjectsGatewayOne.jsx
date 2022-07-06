import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { calculateTotal, projectsIndex } from '../helpers';
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
import AppContext from '../contexts/AppContext';
import { MockAllProjectsGatewayOne } from './mocks/MockAllProjectsGatewayOne';

export const AllProjectsGatewayOne = () => {
  const {
    reports,
    formatReports,
    gateways,
    postReport,
    gatewaysState,
    projectsState,
    setCurrentScreen,
  } = useContext(AppContext);
  const [gateway, setGateway] = useState(gateways[0]);

  useEffect(() => {
    postReport({
      gatewayId: gateway,
    });
  }, []);

  return (
    <Flex w="100%" mb="107px">
      <Flex {...LeftBlockStyle}>
        <Heading {...TitleStyle}>
          {`${projectsState} | ${gatewaysState}`}
        </Heading>
        {!reports
          ? // <MockAllProjectsGatewayOne />
            setCurrentScreen('Report')
          : formatReports.map(project => (
              <>
                <ProjectRow
                  key={project[0].name}
                  project={project[0].name}
                  total={
                    <>
                      {messages.paragraphs.total}{' '}
                      {calculateTotal(
                        project.map(
                          (reports, index) =>
                            index > 0 &&
                            reports
                              .filter(
                                r => r[Number(gatewaysState.slice(-1)) - 1]
                              )
                              ?.map(r => Number(Math.round(r.amount)))
                        )
                      )}{' '}
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
                {project.map(
                  (reports, index) =>
                    index > 0 &&
                    reports.map((row, index) => (
                      <TableRow
                        key={row.paymentId}
                        columns={[row.created, row.paymentId, row.amount]}
                      />
                    ))
                )}
              </>
            ))}
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
};
