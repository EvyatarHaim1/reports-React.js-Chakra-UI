import React, { useContext, useEffect, useState } from 'react';
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
import { FilterSearch } from './common/FilterSearch';

export const Reports = () => {
  const { reports, isFiltered, filteredReports, showToast, setShowToast } =
    useContext(AppContext);
  const [results, setResult] = useState(reports);

  useEffect(() => {
    if (isFiltered) {
      setResult(filteredReports);
    } else {
      setResult(reports);
    }
  }, [filteredReports, isFiltered, reports]);

  const toast = useToast();

  const NoReportsToast = () =>
    toast({
      title: messages.toasts.noReports.title,
      description: messages.toasts.noReports.description,
      status: 'warning',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });

  const ReportsSuccesToast = () =>
    toast({
      title: messages.toasts.reportsSucceeded.title,
      description: messages.toasts.reportsSucceeded.description,
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
      {/* {handleToast()} */}
      {/* {!reports.length ? ( */}
      <NoReport />
      {/* ) : (
        <Box>
          <FilterSearch />
          <Text>{messages.titles.allPayments}</Text>
          <TableContainer>
            <Table variant="simple">
              <TableCaption></TableCaption>
              <Thead>
                <Tr>
                  <Th>{messages.table.paymentId}</Th>
                  <Th>{messages.table.amount}</Th>
                  <Th> {messages.table.projectId}</Th>
                  <Th> {messages.table.gatewayId}</Th>
                  <Th> {messages.table.userIds}</Th>
                  <Th> {messages.table.modified}</Th>
                  <Th> {messages.table.created}</Th>
                </Tr>
              </Thead>
              {results.map(report => (
                <Tbody key={report.amount}>
                  <Tr>
                    <Td>{report.paymentId}</Td>
                    <Td>{report.amount}</Td>
                    <Td> {report.projectId}</Td>
                    <Td>{report.gatewayId}</Td>
                    <Td>{report.userIds}</Td>
                    <Td>{report.modified}</Td>
                    <Td>{report.created}</Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </TableContainer>
        </Box>
      )} */}
    </Box>
  );
};
