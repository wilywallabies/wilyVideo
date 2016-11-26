const tokenExists = window.localStorage.getItem('userToken') !== null;

const authReducer = function(state = tokenExists, action) {
  let token;
  switch(action.type){
    // case 'SIGNUP_USER':
    //   console.log('REDUCER SIGNUP USER', action);
    //   token = action.payload.data.token ? action.payload.data.token : null;
    //   window.localStorage.setItem('userToken', token)
    //   if (token) {
    //     console.log('LOGGED IN');
    //     return true;
    //   } else {
    //     console.log('ERROR LOGGING IN', token);
    //     return false;
    //   }

    case 'LOGIN_USER':
      console.log('REDUCER LOGIN USER', action);
      token = action.payload.data.token ? action.payload.data.token : null;
      window.localStorage.setItem('userToken', token)
      window.localStorage.setItem('user_Id', action.payload.data.user_id)
      console.log(window.localStorage, ' WINDOW STORAGE')
      if (token) {
        console.log('LOGGED IN');
        return [true, action.payload.data.user_id];
      } else {
        console.log('ERROR LOGGING IN', token);
        return false;
      }

    case 'LOGOUT_USER':
      window.localStorage.removeItem('userToken');
      window.localStorage.removeItem('user_Id');
      return false;

    default:
      return state;
  }
}

export default authReducer;
