export default function(state = [], action){
  console.log(action.payload, ' ACTION.PAYLOAD-');
  // console.log('Action received!:', action);
  switch (action.type){
    case 'RETRIEVE_FRIENDS':
    return [action.payload.data, ...state];

    case 'ADD_FRIEND':
    // return [action.payload, ...state]
  };

  return state;
}