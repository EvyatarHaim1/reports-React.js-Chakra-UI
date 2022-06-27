import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import { NoReport } from './NoReport';
import { AllProjectsAllGateways } from './AllProjectsAllGateways';
import { AllProjectsGatewayOne } from './AllProjectsGatewayOne';
import { ProjectOneAllGateways } from './ProjectOneAllGateways';
import { ProjectOneGatewayOne } from './ProjectOneGatewayOne';

export const Content = () => {
  const [currentScreen, setCurrentScreen] = useState('AllProjectsAllGateways');

  const screens = {
    AllProjectsAllGateways: <AllProjectsAllGateways />,
    AllProjectsGatewayOne: <AllProjectsGatewayOne />,
    ProjectOneAllGateways: <ProjectOneAllGateways />,
    ProjectOneGatewayOne: <ProjectOneGatewayOne />,
    NoReport: <NoReport />,
  };

  const renderScreen = () => {
    return screens[currentScreen];
  };

  return <Box>{renderScreen()}</Box>;
};
