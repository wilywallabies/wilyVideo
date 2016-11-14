import axios from 'axios';


export function retrieveFriends() {

  const request = axios.get('api/friend')
  .then((res) =>
    console.log(res.data, ' res friendsAction ')
    );

  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }

  }

export function addFriend(userId){
  return {
    type: 'ADD_FRIEND',
    payload: userId
  }
}