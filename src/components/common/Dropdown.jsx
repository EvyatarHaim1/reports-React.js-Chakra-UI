import React from 'react';
import { Select } from '@chakra-ui/react';
import { ArrowDownIcon } from '../../assets/svg/arrowDown';

export const Dropdown = ({ text, options }) => {
  return (
    <Select
      {...DropdownStyle}
      open={true}
      placeholder={text}
      icon={<ArrowDownIcon {...IconStyle} />}
    >
      {options.map(option => (
        <option style={{ backgroundColor: '#7E8299' }} value="option">
          {option}
        </option>
      ))}
    </Select>
  );
};

const DropdownStyle = {
  color: 'white',
  cursor: 'pointer',
  bgColor: 'blue.200',
  maxW: '145px',
  minW: '145px',
  hover: 'blue.400',
  fontSize: '14px',
};

const IconStyle = {
  px: '1px',
  pt: '5px',
};
