// import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
// import rootReducer from './../reducers';
import createlogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './../reducers';
// import { middlewares } from './../store';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

// export const checkProps = (component, expectedProps) => {
//     const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
//     return propsErr;
// };

export const testStore = (initialState) => {
    const middleware = applyMiddleware(thunk,createlogger);
    return createStore(reducers,middleware);
};