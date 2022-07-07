import React, { useContext, useEffect, useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { TableRow } from './common/TableRow';
import AppContext from '../contexts/AppContext';
import { TitleStyle, TotalBottomSectionStyle } from '../theme/classes';
import { MockProjectOneAllGateways } from './mocks/MockProjectOneAllGateways';

export const ProjectOneGatewayOne = () => {
  const {
    reports,
    postReport,
    projects,
    gateways,
    projectsState,
    gatewaysState,
    setCurrentScreen,
  } = useContext(AppContext);

  const [totalAmount, setTotalAmount] = useState(0);
  const [title, setTitle] = useState(messages.titles.projectOneGatewayOne);

  useEffect(() => {
    postReport({
      projectId:
        projects[Number(projectsState.charAt(projectsState.length - 1)) - 1]
          ?.projectId,
      gatewayId:
        gateways[Number(gatewaysState.charAt(gatewaysState.length - 1)) - 1]
          ?.gatewayId,
    });
    let amount = 0;
    if (reports) {
      reports.map(report => (amount += Math.round(report.amount)));
      setTotalAmount(amount);
      setTitle(`${projectsState} | ${gatewaysState}`);
    }
  }, [postReport, reports, projectsState, gatewaysState, projects, gateways]);

  return (
    <>
      <Flex {...ContainerStyle}>
        <Heading {...TitleStyle}>{title}</Heading>
        <TableRow
          gatewayOne
          columns={[
            messages.paragraphs.date,
            messages.paragraphs.transactionID,
            messages.paragraphs.amount,
          ]}
        />
        {!reports
          ? // <MockProjectOneAllGateways />
            setCurrentScreen('Report')
          : reports.map((report, index) => (
              <TableRow
                bgColor={index % 2 === 0 && 'lightBlue.100'}
                columns={[report.created, report.paymentId, report.amount]}
              />
            ))}
      </Flex>
      <Text {...TotalBottomSectionStyle}>
        {!reports ? (
          messages.paragraphs.totalBottom
        ) : (
          <>
            {messages.paragraphs.total} {totalAmount}
          </>
        )}
      </Text>
    </>
  );
};

const ContainerStyle = {
  flexDirection: 'column',
  bgColor: 'lightBlue.100',
  p: '18px 27px 17px 19px',
  my: '27px',
  borderRadius: '10px',
};
