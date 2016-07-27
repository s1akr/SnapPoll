import React, { Component } from 'react';
import { render } from 'react-dom';
// import stylesheet from '../public/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'ilovetesting',
      view: 'login',
      question: '',
      answer: ['', '', '', '', ''],
    };
    this.handleQ = this.handleQ.bind(this);
    this.handleA = this.handleA.bind(this);
    this.handleB = this.handleB.bind(this);
    this.handleC = this.handleC.bind(this);
    this.handleD = this.handleD.bind(this);
    this.handleE = this.handleE.bind(this);
    this.logIn = this.logIn.bind(this);
    this.post = this.post.bind(this);
  }

  handleQ(event) {
    this.state.question = event.target.value;
  }

  handleA(event) {
    this.state.answer[0] = event.target.value;
  }

  handleB(event) {
    this.state.answer[1] = event.target.value;
  }

  handleC(event) {
    this.state.answer[2] = event.target.value;
  }

  handleD(event) {
    this.state.answer[3] = event.target.value;
  }

  handleE(event) {
    this.state.answer[4] = event.target.value;
  }

  logIn(event) {
    if (event.keyCode === 13) {
      if (event.target.value === this.state.password) {
        this.setState({ view: 'secret' });
      } else {
        event.target.value = '';
        this.setState({ view: 'error' });
      }
    }
  }

  post() {
    const obj = {
      question: this.state.question,
      answer: this.state.answer,
    };
    $.ajax({
      method: 'POST',
      url: '/question',
      data: obj,
    }).then(() => {
      window.location = '/results'
    })
  }

  render() {
    if (this.state.view === 'secret') {
      return (
        <div>
          <div className="question">
            <div className="title">Q:</div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your question here ..."
                value={this.state.value}
                onChange={this.handleQ}
              />
            </div>
          </div>
          <div className="answer">
            <div className="title">A:</div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your answer here ..."
                value={this.state.value}
                onChange={this.handleA}
              />
            </div>
          </div>
          <div className="answer">
            <div className="title">B:</div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your answer here ..."
                value={this.state.value}
                onChange={this.handleB}
              />
            </div>
          </div>
          <div className="answer">
            <div className="title">C:</div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your answer here ..."
                value={this.state.value}
                onChange={this.handleC}
              />
            </div>
          </div>
          <div className="answer">
            <div className="title">D:</div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your answer here ..."
                value={this.state.value}
                onChange={this.handleD}
              />
            </div>
          </div>
          <div className="answer">
            <div className="title">E:</div>
            <div className="input">
              <input
                type="text"
                placeholder="Enter your answer here ..."
                value={this.state.value}
                onChange={this.handleE}
              />
            </div>
          </div>
          <input type="button" value="Submit" onClick={this.post}/>
        </div>
      );
    } else if (this.state.view === 'login') {
      return (
        <div className="login">
          <input
            type="password"
            placeholder="password ..."
            onKeyDown={this.logIn}
          />
        </div>
      );
    } else if (this.state.view === 'error') {
      return (
        <div className="login">
          <input
            type="password"
            placeholder="password ..."
            onKeyDown={this.logIn}
          />
          <div className="error">You should know this one by now</div>
        </div>
      );
    }
  }
}

render(<App />, document.getElementById('content'));
