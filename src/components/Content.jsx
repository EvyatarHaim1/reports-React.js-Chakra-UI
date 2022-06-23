import React from 'react';
import { Box } from '@chakra-ui/react';

import { AllProjects } from './AllProjects';
import { NoReport } from './NoReport';

const Content = () => {
  return (
    <Box>
      {/* <NoReport /> */}
      <AllProjects />
    </Box>
  );
};

export default Content;
