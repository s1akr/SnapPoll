import { ButtonInput, FormGroup, FormControl, Radio, Button, Well } from 'react-bootstrap';
import React, {Component} from 'react';
// import Radiobutton from './Radio_1';
// import SubmitBtn from './SubmitButton';


export default class LoginBox extends Component {
  render() {
    // const questions = this.createQuestions();
    return (
      <div id='LoginBox'>
      <form onSubmit={this.login.bind(this)}>
      <input id="userName" />
      <input id="pw" />
      <button id="submit" />
      </form>
      </div>
    )
  }

  login() {
    var obj = {};
    obj.name = $('#userName');
    obj.pw = $('#pw');
    obj = JSON.stringify(obj);
    $.post('/login',obj);
  }

    createQuestions(){
      class Question {
        constructor (answer, checked, enabled) {
          this.answer = answer,
          this.checked = checked,
          this.enabled = enabled
      }
    };
    const answer1 = new Question ('Okay', 'checked', 'enabled');
    const answer2 = new Question ('Good', 'checked', 'enabled');
    const answer3 = new Question ('Very Good', 'checked', 'enabled');
    const answer4 = new Question ('Great', 'checked', 'enabled');
    const answer5 = new Question ('Excellent', 'checked', 'enabled');

    const questions = [answer1, answer2, answer3, answer4, answer5];
    return questions.map((item) => {
        <Radiobutton answer={item.answer} checked={item.checked} enabled={item.enabled} key={item.answer}/>
    })

  }

}


// import { ButtonInput, FormGroup, FormControl, Radio, Button, Well } from 'react-bootstrap';
// import React, {Component} from 'react';
//
//
//
// export default class LoginBox extends Component {
// render() {
//   return (
//     <div id='LoginBox'>
//       <form>
//       <Well>
//         <h3>How awesome is this presentation?</h3>
//             <FormGroup>
//               <Radio class="btn" id="A">Kinda awesome</Radio>
//               {' '}
//               <Radio class="btn" id="B">Pretty awesome</Radio>
//               {' '}
//               <Radio class="btn" id="C">Very awesome</Radio>
//               {' '}
//               <Radio class="btn" id="D">Ridiculously effing awesome</Radio>
//             </FormGroup>
//             <Button id="button" type="submit">
//               Submit
//             </Button>
//          </Well>
//        </form>
//     </div>
//   )
// }
// }
