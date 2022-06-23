import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { messages } from '../messages';

export const Footer = () => {
  return (
    <Box {...FooterContainerStyle}>
      <Text>{messages.footerContent}</Text>
    </Box>
  );
};

const FooterContainerStyle = {
  zIndex: 10,
  position: 'fixed',
  color: 'blue.100',
  fontWeight: 'bold',
  bottom: '22px',
  px: '100px',
  pb: '22px',
};
