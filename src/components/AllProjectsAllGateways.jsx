import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { ProjectRow } from './common/ProjectRow';
import { TableRow } from './common/TableRow';
import { TitleStyle, TotalBottomSectionStyle } from '../theme/classes';
import AppContext from '../contexts/AppContext';
import { MockAllProjectsAllGateways } from './mocks/MockAllProjectsAllGateways';

export const AllProjectsAllGateways = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [projectTotal, setProjectTotal] = useState([]);
  const { reports, postReport, projects, gateways } = useContext(AppContext);

  useEffect(() => {
    postReport({
      from: '2021-01-01',
      to: '2021-12-31',
    });
    let amount = 0;
    if (reports) {
      reports.map(report => (amount += Math.round(report.amount)));
      setTotalAmount(amount);
    }
  }, [gateways, postReport, projects, reports]);

  useEffect(() => {
    let sum = 0;
    projects.map(project =>
      reports
        .filter(
          report =>
            report.projectId.toLowerCase() === project.projectId.toLowerCase()
        )
        .map(r => console.log(Number(Math.round(r.amount))))
    );
    setProjectTotal(prev => [...prev, sum]);
    console.log(projectTotal);
  }, []);

  return (
    <>
      <Flex {...ContainerStyle}>
        <Box>
          <Heading {...TitleStyle}>{messages.titles.allProjects}</Heading>
        </Box>

        {!reports ? (
          <MockAllProjectsAllGateways />
        ) : (
          <>
            {projects.map((project, index) => (
              <>
                <ProjectRow
                  key={project.name}
                  project={project.name}
                  total={
                    !reports ? (
                      messages.paragraphs.totalTop
                    ) : (
                      <>
                        {messages.paragraphs.total} {projectTotal[index]}{' '}
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
                {reports
                  .filter(
                    report =>
                      report.projectId.toLowerCase() ===
                      project.projectId.toLowerCase()
                  )
                  .map((row, index) => (
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
                  ))}
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
            {messages.paragraphs.total} {totalAmount}{' '}
            {messages.paragraphs.dollar}
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
