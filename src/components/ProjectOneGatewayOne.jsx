import React, { useContext, useEffect, useState } from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { TableRow } from './common/TableRow';
import AppContext from '../contexts/AppContext';
import { TitleStyle, TotalBottomSectionStyle } from '../theme/classes';
import { MockProjectOneGatewayOne } from './mocks/MockProjectOneGatewayOne';

export const ProjectOneGatewayOne = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { reports, postReport, projects, gateways } = useContext(AppContext);

  useEffect(() => {
    postReport({
      projectId: projects[0].projectId,
      gatewayId: gateways[0].gatewayId,
    });
    let amount = 0;
    if (reports) {
      reports.map(report => (amount += Math.round(report.amount)));
      setTotalAmount(amount);
    }
  }, []);
  return (
    <>
      <Flex {...ContainerStyle}>
        <Heading {...TitleStyle}>
          {messages.titles.projectOneGatewayOne}
        </Heading>
        <TableRow
          gatewayOne
          columns={[
            messages.paragraphs.date,
            messages.paragraphs.transactionID,
            messages.paragraphs.amount,
          ]}
        />
        {!reports ? (
          <MockProjectOneGatewayOne />
        ) : (
          reports.map((report, index) => (
            <TableRow
              bgColor={index % 2 === 0 && 'lightBlue.100'}
              columns={[report.created, report.paymentId, report.amount]}
            />
          ))
        )}
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
