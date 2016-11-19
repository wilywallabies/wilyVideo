import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer.js'
import friendReducer from './friendReducer'
import currentUserInfoReducer from './currentUserInfoReducer'


const rootReducer = combineReducers({
  routing: routerReducer,
  isAuthorized: authReducer,
  friend: friendReducer,
  currentUser: currentUserInfoReducer
});

export default rootReducer;
