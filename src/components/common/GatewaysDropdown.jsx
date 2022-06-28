import React, { useContext, useState } from 'react';
import { Select } from '@chakra-ui/react';

import { ArrowDownIcon } from '../../assets/svg/arrowDown';
import AppContext from '../../contexts/AppContext';
import { DropdownStyle, IconStyle } from '../../theme/classes';
import { gatewaysOptions } from '../../helpers';
import { messages } from '../../messages';

export const GatewaysDropdown = () => {
  const [selected, setselected] = useState('');
  const { setGatewaysState } = useContext(AppContext);

  const handleSelect = e => {
    setselected(e.target.value);
    console.log(e.target.value);
    setGatewaysState(e.target.value);
  };

  return (
    <Select
      {...DropdownStyle}
      placeholder={messages.buttons.selectGateway}
      icon={<ArrowDownIcon {...IconStyle} />}
      value={selected}
      onChange={handleSelect}
    >
      {gatewaysOptions.map(option => (
        <option
          key={option}
          style={{ backgroundColor: '#7E8299' }}
          value={option}
        >
          {option}
        </option>
      ))}
    </Select>
  );
};
