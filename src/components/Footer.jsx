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
  position: 'sticky',
  color: 'blue.100',
  fontWeight: 'bold',
  bottom: 0,
  px: '100px',
  pb: '22px',
};
