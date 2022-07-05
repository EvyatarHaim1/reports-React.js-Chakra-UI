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
            {projects.map(project => (
              <>
                <ProjectRow
                  project={project.name}
                  total={messages.paragraphs.totalTop}
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
                  .filter(report => report.projectId === project.projectId)
                  .map((row, index) => (
                    <TableRow
                      bgColor={index % 2 !== 0 && 'lightBlue.100'}
                      columns={[
                        row.created,
                        messages.paragraphs.gateway2,
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
        {messages.paragraphs.totalBottom}
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
