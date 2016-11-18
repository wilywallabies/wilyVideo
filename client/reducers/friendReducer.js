export default function(state = [], action){ //***SITCH TO STATE = {} ?? or [] OBJECT
  // console.log(action.payload, ' ACTION.PAYLOAD-');
  console.log('Action received!:', action);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
    console.log('RETRIEVE_FRIENDS FIRED!');
    console.log('############################################################')

      // return [...state, action.payload.data];
    console.log(state, ' state, retrieve_friend');
    console.log(...state, ' ...state, retrieve_friend');
    console.log(action.payload,' action.payload');

    console.log([action.payload.data, ...state],' [action.payload.data, ...state]');
      // return [action.payload.data, ...state];
    console.log('############################################################')

      return [...state, action.payload.data];
   console.log('RETRIEVE_FRIENDS Action received!:', action);

      // return [...state, action.payload.data];
    // return [action.payload.data, ...state]

    case 'RETRIEVE_NON_FRIENDS':
    console.log('RETRIEVE_NON_FRIENDS Action received!:', action);

      // console.log(action.payload.data, ' REDUCER DATA')
      // return [...state, action.payload.data];
      return [action.payload.data, ...state];

    case 'ADD_FRIEND':
    console.log('ADD_FRIEND FIRED!');
    // return [ ...state, action.payload.data];
    console.log('********************************************************')
    console.log(state, ' state, ADD_FRIEND');
    console.log(...state, ' ...state, ADD_FRIEND');
    console.log([action.payload.data, ...state],' [action.payload.data, ...state] ADD_FRIEND');
    console.log('********************************************************')
     return [state[0], action.payload.data]; //THIS ONE WORKS, BUT IT MOVES TO SELECT FIELD


    case 'DELETE_FRIEND':

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