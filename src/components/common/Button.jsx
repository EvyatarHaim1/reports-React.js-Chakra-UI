import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const CustomButton = ({ text, icon, click }) => (
  <Button {...BtnStyle} onClick={click}>
    {text}
    {icon && <Image src={icon} {...IconStyle} alt="icon" />}
  </Button>
);

export default CustomButton;

const BtnStyle = {
  cursor: 'pointer',
  color: 'white',
  bgColor: 'blue.300',
  minW: '135px',
  maxW: '135px',
  hover: 'blue.400',
};

const IconStyle = {
  pl: '11px',
};
