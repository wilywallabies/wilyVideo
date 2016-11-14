import axios from 'axios';


export function retrieveFriends() {

  const request = axios.get('api/friend');
  console.log('Request:', request);
  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function getAllUser(){
  const request = axios.get('api/allUser');
  return {
    type: 'GET_ALL_USERS',
    payload: request
  }
}



export function addFriend(userId){
  return {
    type: 'ADD_FRIEND',
    payload: userId
  }
}

