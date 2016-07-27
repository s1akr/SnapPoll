import { ButtonInput, FormGroup, FormControl, Radio, Button, Well } from 'react-bootstrap';
import React, {Component} from 'react';


export default class Radiobutton extends Component {
render() {
  return (
    <div className="Radiobtn">
          <Radio id={this.props.answer} answer={this.props.answer} checked={this.props.checked} enabled={this.props.enabled}>{this.props.answer}</Radio>
    </div>
  )
}
}
