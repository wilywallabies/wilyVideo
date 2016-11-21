import axios from 'axios';
let currentUserId = window.localStorage.getItem('user_Id');

export const TOGGLE_ONLINE = 'TOGGLE_ONLINE';
export const TOGGLE_AWAY = 'TOGGLE_AWAY';
export const TOGGLE_OFFLINE = 'TOGGLE_OFFLINE';
export const CHANGE_STATUS = 'GET_STATUS';


export function toggleOnline() {
  const request = axios.put('api/status/',  { currentUserId, 'status':'y' } );
  return {
    type: TOGGLE_ONLINE,
    payload: request
  }
}

export function toggleAway() {
  const request = axios.put('api/status/', { currentUserId, 'status':'away' } );
  return {
    type: TOGGLE_AWAY,
    payload: request
  }
}

export function toggleOffline() {
  const request = axios.put('api/status/',{ currentUserId, 'status':'n' } );
  return {
    type: TOGGLE_OFFLINE,
    payload: request
  }
}

export function changeStatus(status){
  console.log(status, 'ACTION RECEIVED AS')
  const request = axios.put('api/status/',{ currentUserId, 'status':'n' } );
  return {
    type: CHANGE_STATUS,
    payload: request
  }
}