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
  const [searchValue, setsearchValue] = useState('');
  const [currentFilter, setFilter] = useState('');
  const [currentSort, setSort] = useState('');

  const { setFilteredReports, setIsFiltered, filteredReports, reports } =
    useContext(AppContext);

  useEffect(() => {
    if ((searchValue && currentFilter) || currentSort) {
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

    if (currentFilter) {
      if (currentFilter === messages.filteroptions.from) {
        setFilteredReports(
          filteredReports.filter(report =>
            report.created.includes(e.target.value)
          )
        );
      } else if (currentFilter === messages.filteroptions.to) {
        setFilteredReports(
          filteredReports.filter(report =>
            report.modified.includes(e.target.value)
          )
        );
      } else {
        setFilteredReports(
          filteredReports.filter(report =>
            report[currentFilter].includes(e.target.value)
          )
        );
      }
    }
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleSort = e => {
    setSort(e.target.value);
    let prevSort = e.target.value;
    if (prevSort === e.target.value) setIsFiltered(false);
    if (e.target.value === messages.filteroptions.from) {
      setFilteredReports(
        filteredReports.sort((a, b) => {
          if (a.created < b.created) return -1;
          if (a.created > b.created) return 1;
          else return 0;
        })
      );
    } else if (e.target.value === messages.filteroptions.to) {
      setFilteredReports(
        filteredReports.sort((a, b) => {
          if (a.modified < b.modified) return -1;
          if (a.modified > b.modified) return 1;
          else return 0;
        })
      );
    } else {
      setFilteredReports(
        filteredReports.sort((a, b) => {
          if (a[e.target.value] < b[e.target.value]) return -1;
          if (a[e.target.value] > b[e.target.value]) return 1;
          else return 0;
        })
      );
    }
  };

  return (
    <Flex {...SearchbarContainerStyle}>
      <InputGroup variant="flushed">
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.2em"
          children={<FiSearch color="blue.100" width="17.23px" />}
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
            style={{ backgroundColor: 'gray' }}
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
            style={{ backgroundColor: 'gray' }}
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
