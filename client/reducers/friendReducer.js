export default function(state = [], action){ //***SITCH TO STATE = {} ?? or [] OBJECT
  // console.log(action.payload, ' ACTION.PAYLOAD-');
  console.log('Action received!:', action);
  switch (action.type){

    case 'RETRIEVE_FRIENDS':
      console.log('RETRIEVE_FRIENDS FIRED!');
      console.log('RETRIEVE_FRIENDS Action received!:', action);

      console.log('############################################################')

        // return [...state, action.payload.data];
      console.log(state, ' state, retrieve_friend');
      console.log(...state, ' ...state, retrieve_friend');
      console.log(action.payload,' action.payload');

      console.log([action.payload.data, ...state],' [action.payload.data, ...state]');
        // return [action.payload.data, ...state];
      console.log('############################################################')

      return [...state, action.payload.data];

      // return [...state, action.payload.data];
    // return [action.payload.data, ...state]

    case 'RETRIEVE_NON_FRIENDS':
      console.log('**************========================********************')

      console.log('RETRIEVE_NON_FRIENDS Action received!:', action);
      // console.log(action.payload.data, ' REDUCER DATA')
      // return [...state, action.payload.data];
      console.log('**************========================********************')
      return [action.payload.data, ...state];

    case 'ADD_FRIEND':
      console.log('ADD_FRIEND FIRED!');
      console.log('********************************************************')
      console.log(state, ' state, ADD_FRIEND');
      console.log(...state, ' ...state, ADD_FRIEND');
      console.log([action.payload.data, ...state],' [action.payload.data, ...state] ADD_FRIEND');
      console.log('********************************************************')
     return [action.payload.data, ...state]; //THIS ONE WORKS, BUT IT MOVES TO SELECT FIELD
     // return [state[0], action.payload.data]; //THIS ONE KINDA WORKS

    case 'DELETE_FRIEND':
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
      console.log(action.payload, 'DELETE_FRIEND REDUCER DATA')
      console.log(state, ' state, DELETE_FRIEND');
      console.log(...state, ' ...state, DELETE_FRIEND');
      console.log([...state, action.payload.data], '[...state, action.payload.data], DELETE_FRIEND');
      // console.log(...state, ' ...state, DELETE_FRIEND');
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')

      return [state[0], action.payload.data];

  };

  return state;
}