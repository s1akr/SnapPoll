import React, {Component} from 'react';
import {render} from 'react-dom';
import Data from './Data2';
import ChoicesRow from './ChoicesRow';
import { BarChart } from 'react-easy-chart';
import $ from 'jquery';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.colors = [];
		for(var i = 0; i < 5; i++){
			let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
			this.colors.push(color);
		}
		this.update = this.update.bind(this);
		this.state = {
			question: '',
			answers: ['','','','',''],
			choices: [],
			counter: [0,0,0,0,0],
			colors: this.colors
		}
	}

	update() {
		$.ajax({
			url: '/data',
			type: 'GET',
			dataType: 'json',
			cache: false,
			success: (data) => {
				let newState = this.state;
				// get question from DB
				if(this.state.question !== data[0].question){
					let newQuestion = data[0].question;
					newState.question = newQuestion;
				}
				// if answers change, update them
				let newAnswers = this.state.answers.map(function(answer, index){
					if(answer !== data[0].answers[index]){
						return data[0].answers[index];
					}
					return answer;
				});
				let newChoices = data[0].choices;
				// if counter updates for any choice, update that counter and according color
				let newColors = this.state.colors;
				let newCounter = this.state.counter.map(function(counter, index){
					if(counter !== data[0].counter[index]){
						newColors[index] = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
						return data[0].counter[index];
					}
					return counter;
				});
				newState.counter = newCounter;
				newState.answers = newAnswers;
				newState.choices = newChoices;
				this.setState({newState});
			},
			error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
		})
	}

	componentWillMount() {}

	render() {
		console.log(this.state);
		return (		
			<div className='App'>
				<Data
					key={'data'}
					url={this.props.url}
					question={this.state.question}
					answers={this.state.answers}
					choices={this.state.choices}
					counter={this.state.counter}
					colors={this.state.colors}
				/>
			</div>
		)
	}

	componentDidMount() {
  	this.update();
  	setInterval(this.update, 200000);
	}
}

