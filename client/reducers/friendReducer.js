export default function(state = {}, action){
  console.log('Action received!:', action);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
      console.log('RETRIEVE_FRIENDS FIRED!');
      console.log('RETRIEVE_FRIENDS Action received!:', action);

      return [...state, action.payload.data];

    case 'RETRIEVE_NON_FRIENDS':
      console.log('RETRIEVE_NON_FRIENDS FIRED!');
      console.log(action.payload, 'RETRIEVE_NON_FRIENDS');

      return [action.payload.data, ...state];

    case 'ADD_FRIEND':
      console.log('ADD_FRIEND FIRED!');
      console.log(action.payload.data, 'ADD_FRIEND');

     return [action.payload.data];
      // return [action.payload.data, ...state];


    case 'DELETE_FRIEND':
      console.log('DELETE_FRIEND FIRED!');
      console.log(action.payload, 'DELETE_FRIEND');

      return [action.payload.data];
      // return [action.payload.data, ...state];

  };

  return state;
}