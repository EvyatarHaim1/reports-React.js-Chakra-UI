import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import { NoReport } from './NoReport';
import { AllProjectsAllGateways } from './AllProjectsAllGateways';
import { AllProjectsGatewayOne } from './AllProjectsGatewayOne';
import { ProjectOneAllGateways } from './ProjectOneAllGateways';
import { ProjectOneGatewayOne } from './ProjectOneGatewayOne';

export const Content = () => {
  const [currentScreen, setCurrentScreen] = useState('');

  const renderScreen = () => {
    if (currentScreen === 'AllProjectsAllGateways')
      return <AllProjectsAllGateways />;
    else if (currentScreen === 'AllProjectsGatewayOne')
      return <AllProjectsGatewayOne />;
    else if (currentScreen === 'ProjectOneAllGateways')
      return <ProjectOneAllGateways />;
    else if (currentScreen === 'ProjectOneGatewayOne')
      return <ProjectOneGatewayOne />;
    else return <NoReport />;
  };

  return <Box>{renderScreen()}</Box>;
};
