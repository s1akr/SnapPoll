import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import App from '../Client/Result/App2';
import Data from '../Client/Result/Data2';
import ChoicesRow from '../Client/Result/ChoicesRow';

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
