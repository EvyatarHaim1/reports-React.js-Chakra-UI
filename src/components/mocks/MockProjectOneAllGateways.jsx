import React from 'react';

import { messages } from '../../messages';
import { ProjectRow } from '../common/ProjectRow';
import { TableRow } from '../common/TableRow';

export const MockProjectOneAllGateways = () => {
  return (
    <>
      <ProjectRow
        project={messages.paragraphs.gateway1}
        total={messages.paragraphs.totalTop}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date2,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount1,
        ]}
      />
      <TableRow
        columns={[
          messages.paragraphs.date3,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount2,
        ]}
      />
      <TableRow
        bgColor="lightBlue.100"
        columns={[
          messages.paragraphs.date4,
          messages.paragraphs.transactionExp,
          messages.paragraphs.amount3,
        ]}
      />
      <ProjectRow
        topSpace
        project={messages.paragraphs.gateway2}
        total={messages.paragraphs.rowTotal}
      />
      <ProjectRow
        project={messages.paragraphs.gateway3}
        total={messages.paragraphs.rowTotal}
      />
      <ProjectRow
        project={messages.paragraphs.gateway4}
        total={messages.paragraphs.rowTotal}
      />
    </>
  );
};
