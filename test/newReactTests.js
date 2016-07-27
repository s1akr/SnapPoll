import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import App from '../components/App2';
import Data from '../components/Data2';

describe('<App/>', () => {
  const wrapper = mount(<App />);

  it('App should exist', () => {
    expect(wrapper).to.exist;
  });

  it('renders one <div> with class="App"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('App')).to.equal(true);
  });

  it('renders one <LoginBox /> component', () => {
    expect(wrapper.find(LoginBox)).to.have.length(1);
	});	

	it('renders one <Data /> component', () => {
    expect(wrapper.find(Data)).to.have.length(1);
	});	

})

describe('<Data/>', () => {
  const wrapper = mount(<Data />);
  
  it('Data should exist', () => {
    expect(wrapper).to.exist;
  });

  it('renders one <div> with class="Data"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('Data')).to.equal(true);
  });

  it('contains a BarChart element within the Data div', () => {
    const barChart = wrapper.childAt(0);
    expect(wrapper.find(BarChart)).to.have.length(1);

    // console.log(barChart);
  });
})

describe('<LoginBox/ >', () => {
  const wrapper = shallow (<LoginBox />);
  const form = wrapper.childAt(0);

  it('LoginBox should exist', () => {
    expect(wrapper).to.exist;
  });

  it('submit form should exist', () => {
    expect(form).to.exist;
  })

  it('renders one <div> with class="LoginBox"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('LoginBox')).to.equal(true);
  });

  it('contains a form', () => {
    expect(form.type()).to.equal('form');
  })

  it('form contains 2 input fields and a submit button', () => {
    const input1 = form.childAt(0);
    expect(input1.type()).to.equal('input');
    expect(input1.hasClass('userName')).to.equal(true);
    const input2 = form.childAt(1);
    expect(input2.type()).to.equal('input');
    expect(input2.hasClass('pw')).to.equal(true);
    const submit = form.childAt(2);
    expect(submit.type()).to.equal('button');
    expect(submit.hasClass('submit')).to.equal(true);
  })
})

describe('<Radiobutton', () => {
  const wrapper = shallow(<Radiobutton />);

  it('Radiobutton should exist', () => {
    expect(wrapper).to.exist;
  });  

  it('Radiobutton should render one div with class "Radiobtn"', () => {
    expect(wrapper.type()).to.equal('div');
    expect(wrapper.hasClass('Radiobtn')).to.equal(true);
  });

  it('Radiobutton renders one Radio with a prop.answer', () =>{
    const radio = wrapper.childAt(0);
    expect(radio.type()).to.equal('Button');
  })
})

