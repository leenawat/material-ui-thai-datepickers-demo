import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import moment from "moment";
import MomentUtils from '@date-io/moment';
import "moment/locale/th";

import './App.css';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

moment.locale("th");
function App () {
  const [locale, setLocale] = useState("th");
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
        <TimePicker value={selectedDate} onChange={handleDateChange} />
        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
