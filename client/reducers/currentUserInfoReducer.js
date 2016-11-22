import { CHANGE_STATUS } from '../actions/onlineStatusActions';
import { RETRIEVE_CURRENT_USER, TOGGLE_ONLINE } from '../actions/friendsAction';

export default function(state = {}, action){
  console.log(' user Info Action received:', action);
  switch (action.type){

    case RETRIEVE_CURRENT_USER:
      return Object.assign({}, ...state,
        {
            email: action.payload.data[0].email,
            username: action.payload.data[0].userName,
            status: action.payload.data[0].onlineStatus
        });

    case CHANGE_STATUS:
      return Object.assign({}, ...state,
        {
            email: action.payload.data[0].email,
            username: action.payload.data[0].userName,
            status: action.payload.data[0].onlineStatus
        })

    case TOGGLE_ONLINE:
      return Object.assign({}, ...state,
        {
            email: action.payload.data[0].email,
            username: action.payload.data[0].userName,
            status: action.payload.data[0].onlineStatus
        })
  };

  return state;
}


