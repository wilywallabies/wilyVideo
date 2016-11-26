import axios from 'axios';
var currentUserId = window.localStorage.getItem('user_Id')

export const RETRIEVE_CURRENT_USER = 'RETRIEVE_CURRENT_USER';

export function retrieveFriends() {
var currentUserId = window.localStorage.getItem('user_Id')

  const request = axios.get('api/friend/', {params: { currentUserId } });
  return {
    type: 'RETRIEVE_FRIENDS',
    payload: request
  }
}

export function addFriend(userId){
var currentUserId = window.localStorage.getItem('user_Id')
  const request = axios.post('api/friend/', {friendId:userId, userId: currentUserId})

  return {
    type: 'ADD_FRIEND',
    payload: request
  }
}

export function deleteFriend(userId){
var currentUserId = window.localStorage.getItem('user_Id')
  const request = axios.delete('api/friendDelete/' + userId + '/' +currentUserId)

  return {
    type: 'DELETE_FRIEND',
    payload: request
  }
}

export function getNonFriends(){
var currentUserId = window.localStorage.getItem('user_Id')

  const request = axios.get('api/allUser/', {params: { currentUserId } });

  return {
    type: 'RETRIEVE_NON_FRIENDS',
    payload: request
  }
}

export function getCurrentUserInfo(){
var currentUserId = window.localStorage.getItem('user_Id')

  const request = axios.get('api/currentUserInfo/', {params: { currentUserId } });

  return {
    type: 'RETRIEVE_CURRENT_USER',
    payload: request

  }
}

export function callUser(){
var currentUserId = window.localStorage.getItem('user_Id')

  // const request
  console.log('callUser Request Received', request);
  return {
    type: 'CALL_USER',
    payload: request
  }
}
