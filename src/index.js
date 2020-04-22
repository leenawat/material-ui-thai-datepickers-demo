import React from 'react';
import ReactDOM from 'react-dom';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import './index.css';
import App from './App';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);
