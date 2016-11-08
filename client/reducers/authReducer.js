const tokenExists = window.localStorage.getItem('userToken') !== null;

const authReducer = function(state = tokenExists, action) {
  let token;
  switch(action.type){

    case 'LOGIN_USER':
      console.log('REDUCER LOGIN USER', action);
      token = action.payload.data.token ? action.payload.data.token : null;
      window.localStorage.setItem('userToken', token)
      if (token) {
        console.log('LOGGED IN');
        return true;
      } else {
        console.log('ERROR LOGGING IN', token);
        return false;
      }

    case 'LOGOUT_USER':
      window.localStorage.removeItem('userToken');
      return false;

    default:
      return state;
  }
}

export default authReducer;