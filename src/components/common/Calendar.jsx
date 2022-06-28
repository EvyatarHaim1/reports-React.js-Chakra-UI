import React, { forwardRef, useContext, useState } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PickerIcon from '../../assets/svg/date.svg';
import AppContext from '../../contexts/AppContext';
import { messages } from '../../messages';

export const Calendar = ({ text }) => {
  const [startDate, setStartDate] = useState(new Date('01-01-2021'));
  const { fromDate, toDate, setFromDate, setToDate } = useContext(AppContext);

  const handleChangeDate = date => {
    let formatedDate = moment(date).format('YYYY-MM-DD');
    setStartDate(date);
    if (text === messages.buttons.fromDate) {
      setFromDate(formatedDate);
    } else {
      setToDate(formatedDate);
    }
  };

  const renderPlaceholder = () => {
    if (
      (text === messages.buttons.fromDate && !fromDate) ||
      (text === messages.buttons.toDate && !toDate)
    ) {
      return text;
    }
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      style={{
        backgroundColor: '#1BC5BD',
        color: 'white',
        borderRadius: '5px',
        padding: '4px',
      }}
      onClick={onClick}
      ref={ref}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: '18px',
          paddingRight: '10px',
          height: '32px',
          width: '135px',
        }}
      >
        {renderPlaceholder() || value}
        <img src={PickerIcon} alt="picker" />
      </div>
    </button>
  ));

  return (
    <DatePicker
      className="red-border"
      minDate={new Date('01-01-2021')}
      maxDate={new Date('12-31-2021')}
      customInput={<CustomInput />}
      max-width="135px"
      selected={startDate}
      onChange={date => handleChangeDate(date)}
    />
  );
};
