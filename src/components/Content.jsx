import React from 'react';
import { Box } from '@chakra-ui/react';

import { AllProjectsAllGateways } from './AllProjectsAllGateways';
import { NoReport } from './NoReport';
import { AllProjectsGatewayOne } from './AllProjectsGatewayOne';
import { ProjectOneGatewayOne } from './ProjectOneGatewayOne';
import { ProjectOneAllGateways } from './ProjectOneAllGateways';

const Content = () => {
  return (
    <Box>
      {/* <NoReport /> */}
      {/* <AllProjectsAllGateways /> */}
      <AllProjectsGatewayOne />
      {/* <ProjectOneGatewayOne />
      <ProjectOneAllGateways /> */}
    </Box>
  );
};

export default Content;
