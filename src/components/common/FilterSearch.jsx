import React, { useState } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

import { filterReportOption } from '../../helpers';
import { messages } from '../../messages';

export const FilterSearch = ({ reports }) => {
  const [filteredReports, setFilteredReports] = useState(reports);
  const [currentFilter, setFilter] = useState('');
  const [searchValue, setsearchValue] = useState('');
  const [currentSort, setSort] = useState('');

  const handleSearch = async e => {
    let name = e.target.value;
    setsearchValue(name);
    // let filteredData = results.filter(value =>
    //   report.name.includes(name.toLowerCase())
    // );
    // setUrlsBySearch(filteredData);
    // setCurrentPage(1);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleSort = e => {
    setSort(e.target.value);
  };

  return (
    <Flex {...SearchbarContainerStyle}>
      <InputGroup variant="flushed">
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.2em"
          children={<FiSearch color="#0043C0" width="17.23px" />}
        />
        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search..."
          value={searchValue}
        />
      </InputGroup>
      <Select
        placeholder={messages.buttons.filter}
        value={currentFilter}
        onChange={handleFilter}
      >
        {filterReportOption.map(option => (
          <option
            key={option}
            style={{ backgroundColor: '#7E8299' }}
            value={option}
          >
            {option}
          </option>
        ))}
      </Select>
      <Select
        // {...DropdownStyle}
        placeholder={messages.buttons.sort}
        value={currentFilter}
        onChange={handleSort}
      >
        {filterReportOption.map(option => (
          <option
            key={option}
            style={{ backgroundColor: '#7E8299' }}
            value={currentSort}
          >
            {option}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

const SearchbarContainerStyle = {
  mb: '28px',
  mt: '6.88px',
  w: '60%',
  borderRadius: '17px',
  bgColor: 'white',
};
