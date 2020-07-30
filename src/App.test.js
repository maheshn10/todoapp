import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr } from './Utils';
import React from 'react';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
});

  it('Should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
});

});