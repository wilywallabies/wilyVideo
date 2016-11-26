import axios from 'axios';

export const TOGGLE_ONLINE = 'TOGGLE_ONLINE';
export const TOGGLE_OFFLINE = 'TOGGLE_OFFLINE';
export const CHANGE_STATUS = 'GET_STATUS';


export function toggleOnline() {
let currentUserId = window.localStorage.getItem('user_Id');

  const request = axios.put('api/status/',  { currentUserId, 'status':'y' } );
  return {
    type: TOGGLE_ONLINE,
    payload: request
  }
}


export function toggleOffline() {
let currentUserId = window.localStorage.getItem('user_Id');

  const request = axios.put('api/status/',{ currentUserId, 'status':'n' } );
  return {
    type: TOGGLE_OFFLINE,
    payload: request
  }
}

export function changeStatus(status){
let currentUserId = window.localStorage.getItem('user_Id');

  console.log(status, 'ACTION RECEIVED AS')
  const request = axios.put('api/status/',{ currentUserId, status } );
  return {
    type: CHANGE_STATUS,
    payload: request
  }
}