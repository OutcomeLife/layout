import {combineReducers} from 'redux';
import baseEntity from './baseEntityReducer';
import vertx from './vertxReducer';
import setup from './setupReducer';
import auth from './authReducer';



export default combineReducers({
  baseEntity,
  vertx,
  setup,
  auth
});