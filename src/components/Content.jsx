import React, { useContext } from 'react';
import { Box } from '@chakra-ui/react';

import { AllProjectsAllGateways } from './AllProjectsAllGateways';
import { AllProjectsGatewayOne } from './AllProjectsGatewayOne';
import { ProjectOneAllGateways } from './ProjectOneAllGateways';
import { ProjectOneGatewayOne } from './ProjectOneGatewayOne';
import AppContext from '../contexts/AppContext';
import { Reports } from './Reports';
import { ProjectsModal } from './common/ProjectsModal';
import { GatewaysModal } from './common/GatewaysModal';

export const Content = () => {
  const { currentScreen } = useContext(AppContext);
  const screens = {
    AllProjectsAllGateways: <AllProjectsAllGateways />,
    AllProjectsGatewayOne: <AllProjectsGatewayOne />,
    ProjectOneAllGateways: <ProjectOneAllGateways />,
    ProjectOneGatewayOne: <ProjectOneGatewayOne />,
    Report: <Reports />,
  };

  const renderScreen = () => {
    return screens[currentScreen];
  };

  return (
    <Box>
      {renderScreen()}
      <ProjectsModal />
      <GatewaysModal />
    </Box>
  );
};
