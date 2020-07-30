import {createStore,applyMiddleware} from 'redux';
import createlogger from 'redux-logger';
import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = applyMiddleware(thunk,createlogger);


export const store = createStore(reducers,middleware);




