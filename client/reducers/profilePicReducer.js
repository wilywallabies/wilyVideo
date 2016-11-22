export default function (state = { profilePic: '' }, action) {
  switch (action.type) {

    case 'SUBMIT_PROFILE_PIC':
      return Object.assign({}, state, { profilePic: action.payload.uri });

    case 'GET_PROFILE_PIC':
      return Object.assign({}, state, { profilePic: action.payload[0].image });

    default:
      return state;
  }
}
