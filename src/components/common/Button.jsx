import React from 'react';
import { Button, Image } from '@chakra-ui/react';

const CustomButton = ({ text, type, icon }) => {
  return (
    <Button {...BtnStyle(type)}>
      {text}
      <Image src={icon} alt="icon" />
    </Button>
  );
};

export default CustomButton;

const BtnStyle = type => ({
  color: 'white',
  bgColor: type ? 'blue.300' : 'blue.200',
});
