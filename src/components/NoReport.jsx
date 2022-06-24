import React from 'react';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import noReport from '../assets/svg/noReportIcon.svg';
import { messages } from '../messages';

export const NoReport = () => (
  <Flex {...ContainerStyle}>
    <Heading {...TitleStyle}>{messages.titles.noReports}</Heading>
    <Text {...SubtitleStyle}>{messages.paragraphs.noReportsParagraph}</Text>
    <Image src={noReport} {...NoReportImgStyle} alt="noReport" />
  </Flex>
);

const ContainerStyle = {
  flex: '1',
  flexDirection: 'column',
  justify: 'center',
  align: 'center',
};

const TitleStyle = {
  fontSize: '24px',
  color: 'blue.500',
  pt: '50px',
};

const SubtitleStyle = {
  color: 'gray.100',
  w: '470px',
  fontWeight: 'bold',
  mb: '51px',
  textAlign: 'center',
};

const NoReportImgStyle = {
  w: '402.5px',
  h: '171.35px',
};
