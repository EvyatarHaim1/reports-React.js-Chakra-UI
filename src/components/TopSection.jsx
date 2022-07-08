import React, { useContext } from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Button from './common/Button';
import { Calendar } from './common/Calendar';
import AppContext from '../contexts/AppContext';
import { ProjectDropDown } from './common/ProjectDropDown';
import { GatewaysDropdown } from './common/GatewaysDropdown';

export const TopSection = () => {
  const { postReport, fromDate, toDate } = useContext(AppContext);

  const handleReport = async () => {
    if (!fromDate || !toDate) {
      alert(messages.alerts.twoDateMandatory);
    } else {
      await postReport({ from: fromDate, to: toDate });
    }
  };

  return (
    <>
      <HStack {...TopSectionContainerStyle}>
        <Box flexGrow={1}>
          <Text {...TitleStyle}>{messages.titles.reports}</Text>
          <Text {...SubtitleStyle}>{messages.paragraphs.easilyGenerate}</Text>
        </Box>
        <HStack flex="1" justify="end">
          <ProjectDropDown />
          <GatewaysDropdown />
          <Calendar text={messages.buttons.fromDate} />
          <Calendar text={messages.buttons.toDate} />
          <Button text={messages.buttons.generateReport} click={handleReport} />
        </HStack>
      </HStack>
    </>
  );
};

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
