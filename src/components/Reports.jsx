import React, { useContext, useEffect } from 'react';
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from '@chakra-ui/react';

import AppContext from '../contexts/AppContext';
import { NoReport } from './NoReport';
import { messages } from '../messages';

export const Reports = () => {
  const { reports, showToast, setShowToast } = useContext(AppContext);

  useEffect(() => {}, [reports]);
  const toast = useToast();

  const NoReportsToast = () =>
    toast({
      title: 'No Reports Found.',
      description: 'Try to increase the date range',
      status: 'warning',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });

  const ReportsSuccesToast = () =>
    toast({
      title: 'Fetching reports successfully',
      description: 'You can review all the result from report API',
      status: 'success',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });

  const handleToast = () => {
    if (showToast) {
      if (!reports.length) {
        NoReportsToast();
      } else {
        ReportsSuccesToast();
      }
    }
    setShowToast(false);
  };

  return (
    <Box>
      {handleToast()}
      {!reports.length ? (
        <NoReport />
      ) : (
        <Box>
          <Text>{messages.titles.reports}</Text>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>All the Payments from API</TableCaption>
              <Thead>
                <Tr>
                  <Th>paymentId</Th>
                  <Th>amount</Th>
                  <Th> projectId</Th>
                  <Th> gatewayId</Th>
                  <Th> userIds</Th>
                  <Th> modified</Th>
                </Tr>
              </Thead>
              {reports.map(report => (
                <Tbody key={report.paymentId}>
                  <Tr>
                    <Td>{report.paymentId}</Td>
                    <Td>{report.amount}</Td>
                    <Td> {report.projectId}</Td>
                    <Td>{report.gatewayId}</Td>
                    <Td>{report.userIds}</Td>
                    <Td>{report.modified}</Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};
