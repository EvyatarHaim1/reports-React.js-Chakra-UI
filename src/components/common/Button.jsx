import React from 'react';
import { Button, Image } from '@chakra-ui/react';
import { Calendar } from './Calendar';
import { Dropdown } from './Dropdown';

const CustomButton = ({ text, type, icon, click }) => {
  const handleClick = () => {
    if (click === 'selectProject') return <Dropdown />;
    else if (click === 'selectGateways') return <Dropdown />;
    else if (click === 'date') return <Calendar />;
    else {
      console.log('report');
    }
  };

  return (
    <Button
      {...BtnStyle(type)}
      // onClick={handleClick}
    >
      {text}
      {icon && <Image src={icon} {...IconStyle} alt="icon" />}
    </Button>
  );
};

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
