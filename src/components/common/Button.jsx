import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const CustomButton = ({ text, type, icon }) => (
  <Button {...BtnStyle(type)}>
    {text}
    {icon && <Image src={icon} {...IconStyle} alt="icon" />}
  </Button>
);

export default CustomButton;

const BtnStyle = type => ({
  cursor: 'pointer',
  color: 'white',
  bgColor: type ? 'blue.300' : 'blue.200',
  hover: 'blue.400',
});

const IconStyle = {
  pl: '11px',
};
