import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { messages } from '../messages';

export const Footer = () => (
  <Box {...FooterContainerStyle}>
    <Text>{messages.footerContent}</Text>
  </Box>
);

const FooterContainerStyle = {
  zIndex: 10,
  color: 'blue.100',
  fontWeight: 'bold',
  px: '100px',
  pb: '22px',
};
