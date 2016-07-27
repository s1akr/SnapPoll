import React, {Component} from 'react';
import {render} from 'react-dom';
import { BarChart } from 'react-easy-chart';
import App from './App2';


render(<App url='/data' />, document.getElementById('main-container'));