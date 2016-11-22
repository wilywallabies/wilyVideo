import axios from 'axios';


export function submitProfilePic(data) {
  let response = axios.post('/api/v1/image', {
    image: data.image,
    email: data.email,
    data_uri: data.data_uri,
    filename: data.filename,
    filetype: data.filetype
  })
    .then((res) => res.data)
    .catch((error) => console.error(error));

  return {
    type: 'SUBMIT_PROFILE_PIC',
    payload: response
  }
}

export function getProfilePic(id) {
  let response = axios.get('/api/v1/image?id=' + id)
    .then((res) => res.data)
    .catch((error) => console.error(error));

  return {
    type: 'GET_PROFILE_PIC',
    payload: response
  }
}
