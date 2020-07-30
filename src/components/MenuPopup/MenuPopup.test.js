import MenuPopup from './MenuPopup';
import {Provider} from 'react-redux'
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { findByTestAtrr } from '../../Utils';
import React from 'react';

const mockStore = configureMockStore([thunk]);

describe('MenuPopup Component', () => {
    let wrapper;

    const store = mockStore({
        startup: { complete: false }
      });

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
              <MenuPopup />
            </Provider>
          )
  });
  
    it('Should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'menupopup');
      expect(component.length).toBe(1);
  });


});