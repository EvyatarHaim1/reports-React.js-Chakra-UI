import React from 'react';
import { Box, Divider, HStack, Image, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Logo from '../assets/svg/logo.svg';
import Logo2 from '../assets/svg/logo2.svg';

export const Header = () => (
  <Box zIndex={10}>
    <HStack {...AppbarStyle}>
      <HStack>
        <Image src={Logo} alt="logo" />
        <Image {...MenuStyle} src={Logo2} alt="logo" />
      </HStack>
      <HStack>
        <Box {...UserShortcutStyle}>
          <Text>{messages.userShortcut}</Text>
        </Box>
        <Text {...UserTextStyle}>{messages.username}</Text>
      </HStack>
    </HStack>
    <Divider {...DividerStyle} />
  </Box>
);

const AppbarStyle = {
  w: '100%',
  justifyContent: 'space-between',
  p: ['35px 35px 16px 35px', '35px 100px 16px 35px'],
};

const UserShortcutStyle = {
  bgColor: 'orange.100',
  color: 'white',
  p: '8px 7px 8px 8px',
  h: '43px',
  w: '43px',
  borderRadius: '5px',
};

const UserTextStyle = {
  color: 'blue.100',
  fontWeight: 'bold',
  fontSize: '16px',
  pl: '3px',
};

const DividerStyle = {
  color: 'lightGray.100',
  h: '2px',
  w: '100vw',
};

const MenuStyle = {
  pl: '30.33px',
};
