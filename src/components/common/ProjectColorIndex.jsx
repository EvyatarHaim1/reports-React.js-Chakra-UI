import React from 'react';
import { Box } from '@chakra-ui/react';

import { ProjectColorStyle } from '../../theme/classes';

export const ProjectColorIndex = ({ color }) => {
  return <Box {...ProjectColorStyle(color)}></Box>;
};
