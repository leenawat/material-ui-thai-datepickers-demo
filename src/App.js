import React, { useState } from 'react';
import moment from "moment";
import MomentUtils from '@date-io/moment';
import "moment/locale/th";

import './App.css';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "material-ui-thai-datepickers"; // '@material-ui/pickers';

moment.locale("th");
function App () {
  const [locale] = useState("th");
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
        <DatePicker 
          value={selectedDate} 
          onChange={handleDateChange} 
          label="with B.E. yearOffset"
          format="DD MMM YYYY"
          yearOffset={543} />
        <br/>

        <TimePicker
          label="24 hours"
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange} />
        <br/>

        <DateTimePicker
          label="with B.E. yearOffset and 24 hours"
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          format="DD MMM YYYY HH:mm น."
          yearOffset={543} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
