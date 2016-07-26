import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../components/App1';
import Data from '../components/Data';
import LoginBox from '../components/LoginBox';
import Radio from '../components/Radio_1.js';
import SubmitButton from '../components/SubmitButton';
import {expect} from 'chai';
import 'babel-polyfill';

describe('<App/>', () => {
	it('renders one <LoginBox /> component', () => {
    console.log('hi');
    const wrapper = shallow(<App />);
    expect(wrapper.find(LoginBox)).to.have.length(1);
	});	

	it('renders one <Data /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Data)).to.have.length(1);
	});	

	// it('renders children when passed in', () => {
 //    const wrapper = shallow(
 //      <App>
 //        <div className="unique" />
 //      </App>
 //    );
 //    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
 //  });
})