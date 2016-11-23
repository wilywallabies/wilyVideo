export default function (state = { profilePic: '' }, action) {
  switch (action.type) {

    case 'SUBMIT_PROFILE_PIC':
    console.log(action.payload, "REDUCERRRR");
      return Object.assign({}, ...state, { profilePic: action.payload.data.uri });

    case 'GET_PROFILE_PIC':
      return Object.assign({}, state, { profilePic: action.payload });

    default:
      return state;
  }
}
