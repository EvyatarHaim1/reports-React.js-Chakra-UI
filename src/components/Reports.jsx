import React, { useContext } from 'react';
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
} from '@chakra-ui/react';

import AppContext from '../contexts/AppContext';
import { NoReport } from './NoReport';
import { messages } from '../messages';

export const Reports = () => {
  const { reports } = useContext(AppContext);
  return (
    <Box>
      {!reports ? (
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
