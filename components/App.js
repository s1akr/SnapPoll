import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App2';


render(<App url='/data' pollInterval={200} />, document.getElementById('main-container'));