import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Button from './common/Button';
import { TopSectionButtons } from '../helpers';

export const TopSection = () => {
  return (
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
};

const TopSectionContainerStyle = {
  h: '113px',
  w: '100%',
  position: 'sticky',
  top: '33px',
};

const TitleStyle = {
  color: 'blue.500',
  fontSize: '24px',
  fontWeight: 'bold',
};

const SubtitleStyle = {
  color: 'gray.100',
};
