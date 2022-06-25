import React from 'react';
import { Box } from '@chakra-ui/react';

import { NoReport } from './NoReport';
import { AllProjectsAllGateways } from './AllProjectsAllGateways';
import { AllProjectsGatewayOne } from './AllProjectsGatewayOne';
import { ProjectOneAllGateways } from './ProjectOneAllGateways';
import { ProjectOneGatewayOne } from './ProjectOneGatewayOne';

export const Content = () => (
  <Box {...ScrollStyle}>
    {/* <NoReport /> */}
    {/* <AllProjectsAllGateways /> */}
    <AllProjectsGatewayOne />
    {/* <ProjectOneAllGateways /> */}
    {/* {/* <ProjectOneGatewayOne /> */}
  </Box>
);

const ScrollStyle = {};
