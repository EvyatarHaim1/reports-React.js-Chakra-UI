import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import { TitleStyle } from '../theme/classes';
import { ProjectColorIndex } from './common/ProjectColorIndex';
import { projectsIndex } from '../helpers';

export const AllProjectsGatewayOne = () => {
  return (
    <Flex w="100%">
      <Flex flexDirection="column" w="50%">
        <Heading {...TitleStyle}>
          {messages.titles.allProjectsGatewayOne}
        </Heading>
      </Flex>
      <Box>
        <Flex>
          {projectsIndex.map(({ name, color }) => (
            <Flex key={name} align="center">
              <ProjectColorIndex color={color} />
              <Text>{name}</Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
