import React, { useContext, useEffect, useState } from 'react';
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
import AppContext from '../../contexts/AppContext';

export const FilterSearch = () => {
  const [currentFilter, setFilter] = useState('');
  const [searchValue, setsearchValue] = useState('');
  const [currentSort, setSort] = useState('');

  const { setFilteredReports, setIsFiltered, filteredReports, reports } =
    useContext(AppContext);

  useEffect(() => {
    if (searchValue && (currentSort || currentFilter)) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
      setFilteredReports(reports);
    }
  }, [
    currentFilter,
    currentSort,
    reports,
    searchValue,
    setFilteredReports,
    setIsFiltered,
  ]);

  const handleSearch = async e => {
    setsearchValue(e.target.value);

    if (currentSort) {
      setFilteredReports(
        filteredReports.sort((a, b) =>
          b[currentSort] > a[currentSort]
            ? 1
            : b[currentSort] < a[currentSort]
            ? -1
            : 0
        )
      );
    }
    if (currentFilter) {
      setFilteredReports(
        filteredReports.filter(report =>
          report[currentFilter].includes(searchValue.toLowerCase())
        )
      );
    }
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
        placeholder={messages.buttons.sort}
        value={currentSort}
        onChange={handleSort}
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
