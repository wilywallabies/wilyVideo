export default function(state = {}, action){
  console.log('Action received!:', action);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
      console.log('RETRIEVE_FRIENDS FIRED!');
      return [...state, action.payload.data ];

    case 'RETRIEVE_NON_FRIENDS':
      console.log('RETRIEVE_NON_FRIENDS FIRED!');

      return [action.payload.data, ...state];

    case 'ADD_FRIEND':
      console.log('ADD_FRIEND FIRED!');
     return [action.payload.data];

    case 'DELETE_FRIEND':
      console.log('DELETE_FRIEND FIRED!');
      return [action.payload.data];

  };

  return state;
}