import React, { useContext, useState } from 'react';
import { Select } from '@chakra-ui/react';

import { ArrowDownIcon } from '../../assets/svg/arrowDown';
import AppContext from '../../contexts/AppContext';
import { DropdownStyle, IconStyle } from '../../theme/classes';
import { projectOptions } from '../../helpers';
import { messages } from '../../messages';

export const ProjectDropDown = () => {
  const [selected, setselected] = useState('');
  const { setProjectsState } = useContext(AppContext);

  const handleSelect = e => {
    setselected(e.target.value);
    setProjectsState(e.target.value);
  };

  return (
    <Select
      {...DropdownStyle}
      placeholder={messages.buttons.selectProject}
      icon={<ArrowDownIcon {...IconStyle} />}
      value={selected}
      onChange={handleSelect}
    >
      {projectOptions.map(option => (
        <option key={option} style={{ backgroundColor: 'gray' }} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};
