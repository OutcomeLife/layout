import {applyMiddleware, createStore} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { compose } from 'redux';

const middleware = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(reducer, middleware);

export default store;
