import axios from 'axios';


export function retrieveFriends() {

  // const request = axios.get('api/friend/'+ window.localStorage.getItem('userToken'));
  // const request = axios.get('api/friend');
  const request = axios.get('api/friend', { params:{userId:window.localStorage.getItem('userToken')}});

  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function addFriend(userId){
  console.log(userId, 'ADDFRIEND ID')
  // console.log(currentUser_Id,  ' CURRENT USER ID!!_____________')
  const request = axios.post('api/friend', {friendId:userId})
  // const request = axios.post('api/friend', {friendId:userId})

  return {
    type: 'ADD_FRIEND',
    payload: request,
  }
}

export function deleteFriend(userId){
  console.log(userId, ' USERID');
  const request = axios.delete('api/friendDelete/' + userId) //1

  console.log(userId, ' deleteFriend Called')
  return {
    type: 'DELETE_FRIEND',
    payload: request,
  }
}

export function getNonFriends(){
  const request = axios.get('api/allUser')

  // console.log('Request Received, Line 37', request);
  return {
    type: 'RETRIEVE_NON_FRIENDS',
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
