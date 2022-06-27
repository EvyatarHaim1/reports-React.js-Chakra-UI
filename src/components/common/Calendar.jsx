import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const Calendar = ({ text }) => {
  const [startDate, setStartDate] = useState(text);
  return (
    <DatePicker
      max-width="135px"
      selected={startDate}
      format="yyyy-mm-dd"
      onChange={date => setStartDate(date)}
    />
  );
};
