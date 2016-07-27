import React from 'react';
import ReactDOM from 'react-dom';

var SurveyTable = React.createClass({

  loadSurveyFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        console.log('componentdidmount',this.state.data)
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },


  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadSurveyFromServer();
    console.log('componentdidmount',this.state.data)
    setInterval(this.loadSurveyFromServer, this.props.pollInterval);
  },

  render: function() {
      var surveys = [];
      if(this.state.data.length > 0) {
        this.state.data.forEach(function(survey){
          //url = this.props.url is err as undefined
          surveys.push(<Survey survey={survey} key={survey._id}  />)
        })
      }
    return (
      <div>
        {surveys}
      </div>
    );
  }
});

var Survey = React.createClass({
  render: function() {
    var choices =[];

    return (
      <div>
        <h3>Question:</h3>
        <h3>{this.props.survey.question}</h3>
        <ChoiceContainer choiceData={this.props.survey}  />
      </div>
    );
  }
});

var ChoiceContainer = React.createClass({
  getInitialState: function() {
    return {answer: ''};
  },

  handleClick: function(index) {
    console.log('choice',this.props.choiceData.choices[index]);
   $.ajax({
      url: '/data',
      dataType: 'json',
      type: 'POST',
      data: {answer: this.props.choiceData.choices[index]}
    }).then(() => {
      window.location = '/results';
    });
  },

  render: function() {
    var choicesArr = [];
    this.props.choiceData.choices.forEach(function(choice,index){
      var boundClick = this.handleClick.bind(this, index);
      choicesArr.push(<button onClick={boundClick} type="submit" value={choice} key={index}>{this.props.choiceData.answers[index]}</button>);
    }.bind(this));
    return (
      <form className="choiceForm">
        {choicesArr}
      </form>

    );
  }
});


ReactDOM.render(
  <SurveyTable url='/data' pollInterval={2000} />,
  document.getElementById('main-container')
);
