import axios from 'axios';
let currentUserId = window.localStorage.getItem('user_Id')

export function submitProfilePic(data) {
  console.log(data, "data from submit profile actionssssss");
  let response = axios.post('api/image', {
    currentUserId: currentUserId,
    data_uri: data.data_uri,
    filename: data.filename,
    filetype: data.filetype
  })



  return {
    type: 'SUBMIT_PROFILE_PIC',
    payload: response
  }
}

// export function getProfilePic(id) {
//   let response = axios.get('/api/profileImage?id=' + id)
//     .then((res) => res.data)
//     .catch((error) => console.error(error));
//
//   return {
//     type: 'GET_PROFILE_PIC',
//     payload: response
//   }
// }
