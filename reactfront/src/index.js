import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Navroutes from './Navroutes';

ReactDOM.render(
  <BrowserRouter><Navroutes></Navroutes></BrowserRouter>,
  document.getElementById('root')
);

