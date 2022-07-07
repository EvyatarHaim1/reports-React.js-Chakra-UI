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
  const [totalAmount, setTotalAmount] = useState(
    messages.paragraphs.gatewayTotal
  );
  const [title, setTitle] = useState(messages.titles.projectOneAllGateways);
  const [gatewayAmount, setGatewayAmount] = useState([]);

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

    const calcGatewayAmount = () => {
      let temp = 0;
      let arr = [];
      gateways.map(g => {
        temp = 0;
        reports
          .filter(
            r => r.gatewayId?.toLowerCase() === g.gatewayId?.toLowerCase()
          )
          .map(r => (temp += Number(Math.round(r.amount))));

        return arr.push(temp);
      });
      setGatewayAmount(arr);
    };

    calcGatewayAmount();
  }, [projectsState]);

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
    <Flex {...ContainerStyle}>
      <Flex {...LeftBlockStyle}>
        <Heading {...TitleStyle}>{title}</Heading>
        {!reports // <MockProjectOneAllGateways />
          ? setCurrentScreen('Report')
          : gateways.map((gateway, index) => (
              <>
                <ProjectRow
                  key={gateway.name}
                  project={gateway.name}
                  total={
                    !reports ? (
                      messages.paragraphs.totalTop
                    ) : (
                      <>
                        {messages.paragraphs.total} {gatewayAmount[index]}{' '}
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
                {reports
                  ?.filter(
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
          <CustomPieChart reports={reports} data={data} />
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
