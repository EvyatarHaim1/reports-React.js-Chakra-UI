import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { ProjectColorIndex } from './common/ProjectColorIndex';
import { projectsIndex } from '../helpers';
import CustomPieChart from './common/PieChart';

export const AllProjectsGatewayOne = () => (
  <Flex w="100%">
    <Flex {...LeftBlockStyle}>
      <Heading {...TitleStyle}>{messages.titles.allProjectsGatewayOne}</Heading>
      <Box>fsdsdf</Box>
    </Flex>

    <Flex {...RightBlockStyle}>
      <Flex {...ButtonSectionStyle}>
        {projectsIndex.map(({ name, color }) => (
          <Flex key={name} align="center">
            <ProjectColorIndex color={color} />
            <Text {...ProjectTextStyle}>{name}</Text>
          </Flex>
        ))}
      </Flex>

      <Box mx="auto" mt="94px" mb="87.5pxs">
        <CustomPieChart />
      </Box>
      <Text {...ButtonSectionStyle} {...TotalTextStyle}>
        {messages.paragraphs.gatewayTotal}
      </Text>
    </Flex>
  </Flex>
);

const LeftBlockStyle = {
  bgColor: 'lightBlue.100',
  borderRadius: '10px',
  flexDirection: 'column',
  w: '50%',
  mr: '31px',
};

const RightBlockStyle = {
  flexDirection: 'column',
  w: '50%',
};

const ButtonSectionStyle = {
  justify: 'space-evenly',
  bgColor: 'lightBlue.100',
  p: '19px 34px 18px 23px',
  borderRadius: '10px',
};

const ProjectTextStyle = {
  pl: '12px',
  fontSize: '14px',
  color: 'blue.500',
};

const TitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  p: '18px 0px 34px 24px',
};

const TotalTextStyle = {
  color: 'blue.500',
  fontWeight: 'bold',
};
