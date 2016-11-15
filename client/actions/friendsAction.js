import axios from 'axios';


export function retrieveFriends() {

  const request = axios.get('api/friend');
  console.log('Request Line 7:', request);
  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function addFriend(userId){
  const request = axios.post('api/friend', {friendId:userId});
  console.log(userId, ' addFriend Called')
  return {
    type: 'ADD_FRIEND',
    payload: request,

  }
}

export function deleteFriend(userId){
  const request = axios.post('api/friendDelete', {friendId:userId});

  console.log(userId, ' deleteFriend Called')
  return {
    type: 'DELETE_FRIEND',
    payload: request,
  }
}

export function getAllUser(){
  const request = axios.get('api/allUser')

  console.log('Request Received, Line 37', request);
  return {
    type: 'GET_ALL_USERS',
    payload: request
  }
}


export function callUser(){
  // const request = axios.get('api/allUser')

  console.log('Request Received, Line 48', request);
  return {
    type: 'CALL_USER',
    payload: request
  }
}
