import MyList from './MyList';
import {Provider} from 'react-redux'
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { findByTestAtrr } from '../../Utils';
import React from 'react';

const mockStore = configureMockStore([thunk]);

describe('MyList Component', () => {
    let wrapper;

    const store = mockStore({
        startup: { complete: false }
      });

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
              <MyList />
            </Provider>
          )
  });
  
    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'mylistcomponent');
      expect(component.length).toBeGreaterThan(0);
  });


});