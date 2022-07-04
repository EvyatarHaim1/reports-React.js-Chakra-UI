import React from 'react';

import { messages } from '../../messages';
import { TableRow } from '../common/TableRow';

export const MockProjectOneGatewayOne = () => (
  <>
    <TableRow
      gatewayOne
      columns={[
        messages.paragraphs.date,
        messages.paragraphs.transactionID,
        messages.paragraphs.amount,
      ]}
    />
    ,
    <TableRow
      bgColor="lightBlue.100"
      columns={[
        messages.paragraphs.date2,
        messages.paragraphs.transactionExp,
        messages.paragraphs.amount1,
      ]}
    />
    ,
    <TableRow
      columns={[
        messages.paragraphs.date3,
        messages.paragraphs.transactionExp,
        messages.paragraphs.amount2,
      ]}
    />
    ,
    <TableRow
      bgColor="lightBlue.100"
      columns={[
        messages.paragraphs.date4,
        messages.paragraphs.transactionExp,
        messages.paragraphs.amount3,
      ]}
    />
  </>
);
