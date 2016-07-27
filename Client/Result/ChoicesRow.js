import {  } from 'react-bootstrap';
import React, {Component} from 'react';
import {render} from 'react-dom';

export default class ChoicesRow extends Component {
 componentDidMount() {}
		render() {
		return (
			<li
				style={{color:this.props.color}}
				className='choice'
				id={this.props.key}>
					{this.props.choice}: {this.props.answer} - {this.props.counter} votes
			</li>
		)
	}
}