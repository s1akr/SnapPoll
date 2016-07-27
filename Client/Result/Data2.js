import { BarChart } from 'react-easy-chart';
import React, {Component} from 'react';
import { render } from 'react-dom';
import ChoicesRow from './ChoicesRow';

export default class Data extends Component {
	componentDidMount() {}

	render() {
		const chartOptions = [];
		const choices = [];
		this.props.answers.forEach(function(answer, index) {
			// let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
			chartOptions.push({x: this.props.choices[index], y: this.props.counter[index], color: this.props.colors[index]})
			choices.push(<ChoicesRow
				key={index}
				choice={this.props.choices[index]}
				counter={this.props.counter[index]}
				answer={answer}
				color={this.props.colors[index]}
				/>);
		}.bind(this));
		return (
			<div className='data'>
				<h3>Question: {this.props.question}</h3>
				<BarChart
					axisLabels={{x: 'Choices', y: 'Votes'}}
					axes
					grid
					height={200}
					width={350}
					margin={{top: 10, right: 0, bottom: 50, left: 50}}
					colorBars
					yDomainRange={[0, 20]}
					data={chartOptions}
				/>
				<ul className='choiceList'>
					{choices}
				</ul>
			</div>
		)
	}
}
