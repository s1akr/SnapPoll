import React, {Component} from 'react';
import {render} from 'react-dom';
import Data from './Data2';
import ChoicesRow from './ChoicesRow';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.update = this.update.bind(this);
		this.state = {
			question: "What topic would you like to review?",
			answers: ['JS Fundamentals', 'Databases','Node/Express','React','Angular' ],
			choices: [ 'A', 'B', 'C', 'D', 'E' ],
			counter: [4,3,2,2,4]
		}
	}

	update() {
		let newState = this.state;
		console.log('newstate ',newState);
		let newCounter = [];
		newState.counter.forEach(function(count){
			newCounter.push(count + 1);
			// console.log(newState);
		})
		newState.counter = newCounter;
		console.log('new ',newState.counter);
		this.setState({newState});

		console.log('update called');
		// $.ajax({
		// 	url: this.props.url,
		// 	dataType: 'json',
		// 	cache: false,
		// 	success: (data) => {
		// 		console.log('data');
			
				// this.setState({
				// 	question: "What topic would you like to review?",
				// 	answers: ['JS Fundamentals', 'Databases','Node/Express','React','Angular' ],
				// 	choices: [ 'A', 'B', 'C', 'D', 'E' ],
				// 	counter: [4,3,2,2,4]
				// })
			}


	componentWillMount() {
		console.log('will mount');
    	// this.update();
    	// setInterval(this.update, 2000);
  	}
  	
  	componentDidMount() {
		console.log('mounted');
    	this.update();
    	setInterval(this.update, 200000);
  	}
	// componentWillUpdate() {
		// const newState = this.state;
		// newState.question = ;
		// newState.answers = ;
		// newState.choices = ;
		// newState.counter = [30,20,40,45,20]
		// console.log(newState.counter);
		// this.setState({
		// 	question: "What topic would you like to review?",
		// 	answers: ['JS Fundamentals', 'Databases','Node/Express','React','Angular' ],
		// 	choices: [ 'A', 'B', 'C', 'D', 'E' ],
		// 	counter: [30,20,40,45,20]
		// }

	// componentDidUpdate() {
	// 	this.setState(newState);
	// }

	// getPollData(){
	// 	$.ajax({
	// 		url: this.props.url,
	// 		dataType: 'json',
	// 		cache: false,
	// 		success: (datat) => {
	// 			console.log('data');
	// 			this.setState({
	// 				question: "What topic would you like to review?",
	// 				answers: ['JS Fundamentals', 'Databases','Node/Express','React','Angular' ],
	// 				choices: [ 'A', 'B', 'C', 'D', 'E' ],
	// 				counter: [10,20,10,15,20]
	// 			})
	// 		}
	// 	})
	// }

	render() {
		console.log(this.state.counter);
		return (		
			<div className='App'>
			<button onClick={this.update}>Update</button>
				<Data
					key={'data'}
					url={this.props.url}
					question={this.state.question}
					answers={this.state.answers}
					choices={this.state.choices}
					counter={this.state.counter}
					/>
			</div>
		)
	}
}

