import axios from 'axios';
let currentUserId = window.localStorage.getItem('user_Id')


export function retrieveFriends() {
// let currentUserId = window.localStorage.getItem('user_Id')

  // const request = axios.get('api/friend/'+ window.localStorage.getItem('userToken'));
  // const request = axios.get('api/friend');
  const request = axios.get('api/friend');
  console.log(currentUserId, ' ID FROM localStorage1')
  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function addFriend(userId){
// let currentUserId = window.localStorage.getItem('user_Id')

  console.log(userId, 'ADDFRIEND ID')
  // console.log(currentUser_Id,  ' CURRENT USER ID!!_____________')
  const request = axios.post('api/friend', {friendId:userId, userId: currentUserId})
  // const request = axios.post('api/friend', {friendId:userId})
  console.log(currentUserId, ' ID FROM localStorage2')

  return {
    type: 'ADD_FRIEND',
    payload: request,
  }
}

export function deleteFriend(userId){
// let currentUserId = window.localStorage.getItem('user_Id')

  console.log(userId, ' USERID');
  const request = axios.delete('api/friendDelete/' + userId) //1
  console.log(currentUserId, ' ID FROM localStorage3')

  console.log(userId, ' deleteFriend Called')
  return {
    type: 'DELETE_FRIEND',
    payload: request,
  }
}

export function getNonFriends(){
// let currentUserId = window.localStorage.getItem('user_Id')

  const request = axios.get('api/allUser')

  console.log(currentUserId, ' ID FROM localStorage4')
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
