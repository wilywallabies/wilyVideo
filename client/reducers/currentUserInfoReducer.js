export default function(state = {}, action){
  console.log(' user Info Action received:', action);
  switch (action.type){

    case 'RETRIEVE_CURRENT_USER':

      return Object.assign({}, ...state,
          {
              email: action.payload.data[0].email,
              username: action.payload.data[0].userName,
          });;
  };

  return state;
}


