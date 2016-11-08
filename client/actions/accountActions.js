import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const signUpUser = function(user){
  console.log("****ACTION SIGNUP USER", user)

  const request = axios.post('/api/signup', {
    email: user.email,
    password: user.password
  })
  .catch((response) => {
    if(response instanceof Error) {
      console.error('POST | Error sending response', response);
    } else {
      console.log('POST | error from server', response);
    }
  });

  return {
    type: 'SIGNUP_USER',
    payload: request
  };
};

export const loginUser = function(user){
  console.log("****ACTION LOGIN USER", user)

  const request = axios.post('/api/login', {
    email: user.email,
    password: user.password
  },
  {
    headers: {
      'x-access-token': window.localStorage.getItem('userToken')
    }
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: 'LOGIN_USER',
    payload: request
  };
};

export const logoutUser = function(user){
  console.log("ACTION LOGOUT USER", user)

  return {
    type: 'LOGOUT_USER'
  };
};
