import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Button from './common/Button';
import { Dropdown } from './common/Dropdown';
import { Calendar } from './common/Calendar';
import { gatewaysOptions, projectOptions } from '../helpers';

export const TopSection = () => (
  <>
    <HStack {...TopSectionContainerStyle}>
      <Box>
        <Text {...TitleStyle}>{messages.titles.reports}</Text>
        <Text {...SubtitleStyle}>{messages.paragraphs.easilyGenerate}</Text>
      </Box>
      <HStack flex="1" justify="end">
        <Dropdown
          text={messages.buttons.selectProject}
          options={projectOptions}
        />
        <Dropdown
          text={messages.buttons.selectGateway}
          options={gatewaysOptions}
        />
        <Calendar text={messages.buttons.fromDate} />
        <Calendar text={messages.buttons.toDate} />
        <Button text={messages.buttons.generateReport} click={''} />
      </HStack>
    </HStack>
  </>
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
