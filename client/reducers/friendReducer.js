export default function(state = [], action){
  // console.log(action.payload, ' ACTION.PAYLOAD-');
  console.log('Action received!:', action.payload);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
      return [action.payload.data, ...state];

    case 'GET_ALL_USERS':
      // console.log(action.payload.data, ' REDUCER DATA')
      return [action.payload.data, ...state];

    case 'ADD_FRIEND':
      // console.log(action.payload.data, ' REDUCER DATA')
      // console.log(...state, ' REDUCER state')
    return [action.payload.data, ...state]
    // return [...state];

    case 'DELETE_FRIEND':
      // console.log(action.payload, ' REDUCER DATA')
    return [action.payload.data, ...state]

    case 'CALL_USER':
    //   console.log(action.payload, ' REDUCER DATA')
    // return [action.payload.data, ...state]
  };

  return state;
}