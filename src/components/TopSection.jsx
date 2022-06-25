import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Button from './common/Button';
import { TopSectionButtons } from '../helpers';

export const TopSection = () => (
  <HStack {...TopSectionContainerStyle}>
    <Box>
      <Text {...TitleStyle}>{messages.titles.reports}</Text>
      <Text {...SubtitleStyle}>{messages.paragraphs.easilyGenerate}</Text>
    </Box>
    <HStack flex="1" justify="end">
      {TopSectionButtons.map(({ type, icon, text }) => (
        <Button key={text} text={text} icon={icon} type={type} />
      ))}
    </HStack>
  </HStack>
);

const TopSectionContainerStyle = {
  zIndex: 15,
  h: '113px',
  w: '100%',
  pos: 'sticky',
  top: '60px',
  bgColor: 'white',
};

const TitleStyle = {
  color: 'blue.500',
  fontSize: '24px',
  fontWeight: 'bold',
};

const SubtitleStyle = {
  color: 'gray.100',
  fontWeight: 'bold',
};
