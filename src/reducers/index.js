import {combineReducers} from 'redux';
import user from './UserReducer';
import vertx from './VertxReducer';


export default combineReducers({
  user,
  vertx
});