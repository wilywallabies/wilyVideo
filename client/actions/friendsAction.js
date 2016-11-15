import axios from 'axios';


export function retrieveFriends() {

  const request = axios.get('api/friend');
  console.log('Request Line 7:', request);
  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function getAllUser(){
  const request = axios.get('api/allUser');
  console.log('Request Line 16:', request);
  return {
    type: 'GET_ALL_USERS',
    payload: request
  }
}



export function addFriend(userId){
  // console.log(userId, ' addFriend Called')
  return {
    type: 'ADD_FRIEND',
    payload: userId
  }
}

