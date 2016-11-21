export default function(state = {}, action){
  console.log('Action received!:', action);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
      return [...state, action.payload.data ];

    case 'RETRIEVE_NON_FRIENDS':
      return [action.payload.data, ...state];

    case 'ADD_FRIEND':
     return [action.payload.data];

    case 'DELETE_FRIEND':
      return [action.payload.data];

  };

  return state;
}