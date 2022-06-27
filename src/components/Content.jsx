import React, { useContext, useState } from 'react';
import { Box } from '@chakra-ui/react';

import { NoReport } from './NoReport';
import { AllProjectsAllGateways } from './AllProjectsAllGateways';
import { AllProjectsGatewayOne } from './AllProjectsGatewayOne';
import { ProjectOneAllGateways } from './ProjectOneAllGateways';
import { ProjectOneGatewayOne } from './ProjectOneGatewayOne';
import AppContext from '../contexts/AppContext';

export const Content = () => {
  const { currentScreen } = useContext(AppContext);
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
