import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer.js'

const rootReducer = combineReducers({
  routing: routerReducer,
  isAuthorized: authReducer
});

export default rootReducer;
