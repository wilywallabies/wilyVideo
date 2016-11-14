import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer.js'
import friendReducer from './friendReducer'


const rootReducer = combineReducers({
  routing: routerReducer,
  isAuthorized: authReducer,
  friend: friendReducer
});

export default rootReducer;
