import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { UseStateExample, UseMemoExample, UseCustomHookExample } from './components'
import { UseHistoryExample } from './components/useHistoryExample';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseStateExample /> */}
    {/* <UseMemoExample userId={1} /> */}
    {/* <UseCustomHookExample /> */}
    <Router>
      <UseHistoryExample />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
