import React, { useContext } from 'react';
import { Box, HStack, Text, useToast } from '@chakra-ui/react';

import { messages } from '../messages';
import Button from './common/Button';
import { Calendar } from './common/Calendar';
import AppContext from '../contexts/AppContext';
import { ProjectDropDown } from './common/ProjectDropDown';
import { GatewaysDropdown } from './common/GatewaysDropdown';

export const TopSection = () => {
  const { reports, postReport, fromDate, toDate } = useContext(AppContext);

  const toast = useToast();

  const NoReportsToast = () =>
    toast({
      title: 'No Reports Found.',
      description: 'Try to increase the date range',
      status: 'warning',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });

  const ReportsSuccesToast = () =>
    toast({
      title: 'Fetching reports successfully',
      description: 'You can review all the result from report API',
      status: 'success',
      position: 'top',
      duration: 5000,
      isClosable: true,
    });

  const handleReport = () => {
    if (!fromDate || !toDate) {
      alert('Please choose 2 dates in order to generate a report');
    } else {
      postReport(fromDate, toDate);
      if (!reports.lengh) {
        NoReportsToast();
      } else {
        ReportsSuccesToast();
      }
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
