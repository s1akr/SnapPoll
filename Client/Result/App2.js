import React, {Component} from 'react';
import {render} from 'react-dom';
import Data from './Data2';
import ChoicesRow from './ChoicesRow';
import { BarChart } from 'react-easy-chart';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.update = this.update.bind(this);
		this.state = {
			question: '',
			answers: [],
			choices: [],
			counter: [0,0,0,0,0]
		}
	}

	update() {
		$.ajax({
			url: '/data',
			type: 'GET',
			dataType: 'json',
			cache: false,
			success: (data) => {
				let newQuestion = data[0].question;
				let newCounter = data[0].counter;
				let newAnswers = data[0].answers;
				let newChoices = data[0].choices;
				let newState = this.state;
				newState.question = newQuestion;
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
		return (		
			<div className='App'>
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

	componentDidMount() {
  	this.update();
  	setInterval(this.update, 10000);
	}
}

