import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Graphs from '../assets/svg/graphsIcon.svg';
import Apps from '../assets/svg/appsIcon.svg';
import Review from '../assets/svg/reviewIcon.svg';
import Projects from '../assets/svg/projectsIcon.svg';
import Close from '../assets/svg/closeIcon.svg';

export const Sidebar = () => (
  <Box {...SidebarContainerStyle}>
    <Image pb="24px" src={Graphs} alt="graphs" />
    <Image pb="26px" src={Apps} alt="apps" />
    <Image pb="26px" src={Review} alt="review" />
    <Image pb="21px" src={Projects} alt="projects" />
    <Image pb="26px" src={Close} alt="close" />
  </Box>
);

const SidebarContainerStyle = {
  w: '100px',
  p: '41px 40px 0px 36px',
};
