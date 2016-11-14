import axios from 'axios';


export function retrieveFriends() {
  return (dispatch) => {
    return axios.get('/api/friend')
  }
}

export function addFriend(){
  return
}