import axios from 'axios';


export function retrieveFriends() {

  const request = axios.get('api/friend');

  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function addFriend(userId){
  const request = axios.post('api/friend', {friendId:userId});

  return {
    type: 'ADD_FRIEND',
    payload: request,
  }
}

export function deleteFriend(userId){
  console.log(userId, ' USERID');
  const request = axios.delete('api/friendDelete/' + userId); //1

  return {
    type: 'DELETE_FRIEND',
    payload: request,
  }
}

export function getAllUser(){
  const request = axios.get('api/allUser')

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
