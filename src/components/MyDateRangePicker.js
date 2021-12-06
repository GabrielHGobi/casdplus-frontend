import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { Context as NoticesContext } from "../context/NoticesContext";
import moment from "moment/min/moment-with-locales";
moment.locale("pt");
import DateRangePicker from "react-native-daterange-picker";

const MyDateRangePicker = ({ open, setOpen }) => {
  const { setDates } = useContext(NoticesContext);
  const [startDate, setStardDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [displayedDate, setDisplayedDate] = useState(moment());
  const changeDates = (dates) => {
    if (dates.startDate) {
      setStardDate(dates.startDate);
      setEndDate(null);
    }
    if (dates.endDate) {
      setEndDate(dates.endDate);
      setDates({
        start_date: new Date(startDate),
        end_date: new Date(dates.endDate),
      });
      setOpen();
    }
    if (dates.displayedDate) setDisplayedDate(dates.displayedDate);
  };

  return (
    <>
      <DateRangePicker
        onChange={changeDates}
        endDate={endDate}
        startDate={startDate}
        displayedDate={displayedDate}
        range
        moment={moment}
        open={open}>
        <></>
      </DateRangePicker>
    </>
  );
};

export default MyDateRangePicker;
