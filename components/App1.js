import {  } from 'react-bootstrap';
import React, {Component} from 'react';
import {render} from 'react-dom';
import LoginBox from './LoginBox';
import Data from './Data';


export default class App extends Component {
	render() {

		return (
			<div id='App'>
				<LoginBox />
				<Data />
			</div>
		)
	}
}
