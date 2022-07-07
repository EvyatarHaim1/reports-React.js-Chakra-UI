import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { ProjectRow } from './common/ProjectRow';
import { TableRow } from './common/TableRow';
import { TitleStyle, TotalBottomSectionStyle } from '../theme/classes';
import AppContext from '../contexts/AppContext';
import { MockAllProjectsAllGateways } from './mocks/MockAllProjectsAllGateways';
import { calculateTotal } from '../helpers';

export const AllProjectsAllGateways = () => {
  const [total, setTotal] = useState(0);
  const { reports, gateways, setCurrentScreen, formatReports } =
    useContext(AppContext);

  useEffect(() => {
    const totalAmount = () => {
      let temp = 0;
      formatReports.map(
        project =>
          (temp += calculateTotal(
            project.map(
              (reports, index) =>
                index > 0 && reports?.map(r => Number(Math.round(r.amount)))
            )
          ))
      );
      setTotal(temp);
    };
    totalAmount();
  }, [total, formatReports]);

  return (
    <>
      <Flex {...ContainerStyle}>
        <Box>
          <Heading {...TitleStyle}>{messages.titles.allProjects}</Heading>
        </Box>

        {!reports ? (
          // <MockAllProjectsAllGateways />
          setCurrentScreen('Report')
        ) : (
          <>
            {formatReports?.map(project => (
              <>
                <ProjectRow
                  key={project[0]?.name}
                  project={project[0]?.name}
                  total={
                    !reports ? (
                      messages.paragraphs.totalTop
                    ) : (
                      <>
                        {messages.paragraphs.total}{' '}
                        {calculateTotal(
                          project.map(
                            (reports, index) =>
                              index > 0 &&
                              reports?.map(r => Number(Math.round(r.amount)))
                          )
                        )}{' '}
                        {messages.paragraphs.dollar}
                      </>
                    )
                  }
                />
                <TableRow
                  allGateways
                  columns={[
                    messages.paragraphs.date,
                    messages.paragraphs.gateway,
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
                        reports={reports}
                        bgColor={index % 2 !== 0 && 'lightBlue.100'}
                        columns={[
                          row.created,
                          gateways.find(
                            g => g.gatewayId.toLowerCase() === row?.gatewayId
                          )?.name,
                          row.paymentId,
                          row.amount,
                        ]}
                      />
                    ))
                )}
              </>
            ))}
          </>
        )}
      </Flex>
      <Text {...TotalBottomSectionStyle}>
        {!reports ? (
          messages.paragraphs.totalBottom
        ) : (
          <>
            {messages.paragraphs.total} {total} {messages.paragraphs.dollar}
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
