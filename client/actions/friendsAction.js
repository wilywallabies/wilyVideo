import axios from 'axios';
let currentUserId = window.localStorage.getItem('user_Id')


export function retrieveFriends() {
// let currentUserId = window.localStorage.getItem('user_Id')

  const request = axios.get('api/friend/', {params: { currentUserId } });
  console.log(currentUserId, ' ID FROM localStorage1')
  return {
    type: 'RETRIEVE_FRIENDS',
    // data: currentUserId,
    payload: request
  }
}

export function addFriend(userId){

  console.log(userId, 'ADDFRIEND ID')
  const request = axios.post('api/friend', {friendId:userId, userId: currentUserId})
  console.log(currentUserId, ' ID FROM localStorage2')

  return {
    type: 'ADD_FRIEND',
    payload: request,
  }
}

export function deleteFriend(userId){

  console.log(currentUserId, ' ID FROM localStorage3')
  const request = axios.delete('api/friendDelete/' + userId + '/' +currentUserId) //1

  console.log(userId, ' deleteFriend Called')
  return {
    type: 'DELETE_FRIEND',
    payload: request,
  }
}

export function getNonFriends(){

  const request = axios.get('api/allUser/', {params: { currentUserId } });

  console.log(currentUserId, ' ID FROM localStorage4')
  // console.log('Request Received, Line 37', request);
  return {
    type: 'RETRIEVE_NON_FRIENDS',
    payload: request
  }
}


export function callUser(){
  // const request = axios.get('api/allUser')

  console.log('callUser Request Received', request);
  return {
    type: 'CALL_USER',
    payload: request
  }
}
