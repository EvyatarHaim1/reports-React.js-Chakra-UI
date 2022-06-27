import React, { useRef } from 'react';
import { Button, Image } from '@chakra-ui/react';

const CustomButton = ({ text, type, icon }) => {
  const BtnRef = useRef(null);

  return (
    <Button ref={BtnRef} {...BtnStyle}>
      {text}
      {icon && <Image src={icon} {...IconStyle} alt="icon" />}
    </Button>
  );
};

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
