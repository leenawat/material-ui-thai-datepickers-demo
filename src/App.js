import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import MomentUtils from '@date-io/moment';

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App () {

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker value={selectedDate} onChange={handleDateChange} />
        <TimePicker value={selectedDate} onChange={handleDateChange} />
        <DateTimePicker value={selectedDate} onChange={handleDateChange} />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
