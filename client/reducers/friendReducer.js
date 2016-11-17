export default function(state = [], action){
  // console.log(action.payload, ' ACTION.PAYLOAD-');
  console.log('Action received!:', action);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
   console.log('RETRIEVE_FRIENDS Action received!:', action);

      // return [...state, action.payload.data];
    return [action.payload.data, ...state]


    case 'RETRIEVE_NON_FRIENDS':
    console.log('RETRIEVE_NON_FRIENDS Action received!:', action);

      // console.log(action.payload.data, ' REDUCER DATA')
      // return [...state, action.payload.data];
    return [action.payload.data, ...state]

    case 'ADD_FRIEND':
      console.log(action.payload, 'ADD_FRIEND REDUCER DATA')
    return [ ...state, action.payload.data]

    case 'DELETE_FRIEND':
      console.log(action.payload, 'DELETE_FRIEND REDUCER DATA')
    // return [action.payload.data, ...state];
      return [...state, action.payload.data];


  };

  return state;
}