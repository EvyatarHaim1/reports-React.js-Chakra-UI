import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Button from './common/Button';
import ArrowIcon from '../assets/svg/arrowDown.svg';
import DateIcon from '../assets/svg/date.svg';

export const TopSection = () => {
  return (
    <HStack {...TopSectionContainerStyle}>
      <Box>
        <Text {...TitleStyle}>{messages.titles.reports}</Text>
        <Text {...SubtitleStyle}>{messages.paragraphs.easilyGenerate}</Text>
      </Box>
      <HStack flex="1" justify="end">
        <Button text={messages.buttons.selectProject} icon={ArrowIcon} />
        <Button text={messages.buttons.selectGateway} icon={ArrowIcon} />
        <Button text={messages.buttons.fromDate} icon={DateIcon} />
        <Button text={messages.buttons.toDate} icon={DateIcon} />
        <Button text={messages.buttons.generateReport} type="report" />
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
