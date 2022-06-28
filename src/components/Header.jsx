import React, { useContext } from 'react';
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

import { messages } from '../messages';
import Logo from '../assets/svg/logo.svg';
import Logo2 from '../assets/svg/logo2.svg';
import AppContext from '../contexts/AppContext';

export const Header = () => {
  const { openModal } = useContext(AppContext);
  return (
    <Flex {...AppbarStyle}>
      <HStack>
        <Image src={Logo} alt="logo" />
        <Image {...MenuStyle} src={Logo2} alt="logo" />
      </HStack>
      <HStack onClick={openModal}>
        <Box {...UserShortcutStyle}>{messages.userShortcut}</Box>
        <Text {...UserTextStyle}>{messages.username}</Text>
      </HStack>
    </Flex>
  );
};

const AppbarStyle = {
  w: '100%',
  zIndex: '15',
  pos: 'fixed',
  top: '0px',
  bgColor: 'white',
  justifyContent: 'space-between',
  p: ['21px 35px 16px 35px', '21px 100px 16px 35px'],
  borderBottom: '2px',
  borderColor: 'lightGray.100',
};

const UserShortcutStyle = {
  align: 'center',
  bgColor: 'orange.100',
  fontSize: '23px',
  color: 'white',
  p: '4px 7px 8px 8px',
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

const MenuStyle = {
  pl: '30.33px',
};
