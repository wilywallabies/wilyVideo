import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer.js'
import friendReducer from './friendReducer'
import currentUserInfoReducer from './currentUserInfoReducer'
import profilePicReducer from './profilePicReducer'


const rootReducer = combineReducers({
  routing: routerReducer,
  isAuthorized: authReducer,
  friend: friendReducer,
  currentUser: currentUserInfoReducer,
  profilePic: profilePicReducer,
});

export default rootReducer;
