import React, { useContext, useEffect, useState } from 'react';
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
import AppContext from '../contexts/AppContext';
// import { MockAllProjectsGatewayOne } from './mocks/MockAllProjectsGatewayOne';

export const AllProjectsGatewayOne = () => {
  const {
    reports,
    formatReports,
    gateways,
    projects,
    postReport,
    gatewaysState,
    projectsState,
    setCurrentScreen,
  } = useContext(AppContext);

  const [totalAmount, setTotalAmount] = useState(0);
  const [gatewayAmount, setGatewayAmount] = useState([]);

  useEffect(() => {
    postReport({
      gatewayId:
        gateways[Number(gatewaysState.charAt(gatewaysState.length - 1)) - 1]
          ?.gatewayId,
    });

    let totalTemp = 0;
    reports.map(r => (totalTemp += Number(Math.round(r.amount))));
    setTotalAmount(totalTemp);

    const calcGatewayAmount = () => {
      let temp = 0;
      let arr = [];
      projects.map(p => {
        temp = 0;
        reports
          .filter(r => r.projectId.toLowerCase() === p.projectId.toLowerCase())
          .map(r => (temp += Number(Math.round(r.amount))));

        return arr.push(temp);
      });
      setGatewayAmount(arr);
    };

    calcGatewayAmount();
  }, [gatewaysState]);

  const data = [
    {
      name: 'Group C',
      value: 0,
      color: '#6497B1',
    },
    {
      name: 'Group A',
      value: gatewayAmount[0] / totalAmount,
      color: '#A259FF',
    },
    {
      name: 'Group B',
      value: gatewayAmount[1] / totalAmount,
      color: '#F24E1E',
    },
    {
      name: 'Group D',
      value: 0,
      color: '#FFC107',
    },
  ];

  return (
    <Flex w="100%" mb="107px">
      <Flex {...LeftBlockStyle}>
        <Heading {...TitleStyle}>
          {`${projectsState} | ${gatewaysState}`}
        </Heading>
        {!reports
          ? // <MockAllProjectsGatewayOne />
            setCurrentScreen('Report')
          : formatReports?.map((project, index) => (
              <>
                <ProjectRow
                  key={project[0].name}
                  project={project[0].name}
                  total={
                    <>
                      {messages.paragraphs.total} {gatewayAmount[index]}{' '}
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
                {project?.map(
                  (reports, index) =>
                    index > 0 &&
                    reports?.map((row, index) => (
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
          {projectsIndex?.map(({ name, color }) => (
            <Flex key={name} align="center">
              <ProjectColorIndex color={color} />
              <Text {...ProjectTextStyle}>{name}</Text>
            </Flex>
          ))}
        </Flex>

        <Box {...PieChartStyle}>
          <CustomPieChart reports={reports} data={data} />
        </Box>
        <Text {...TotalTextStyle}>
          {!reports ? (
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
