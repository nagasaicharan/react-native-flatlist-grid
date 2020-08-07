import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from './Reducers';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, middlewareEnhancer);
export default store;
