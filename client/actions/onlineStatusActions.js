import axios from 'axios';
let currentUserId = window.localStorage.getItem('user_Id');

export const TOGGLE_ONLINE = 'TOGGLE_ONLINE';
export const TOGGLE_AWAY = 'TOGGLE_AWAY';
export const TOGGLE_OFFLINE = 'TOGGLE_OFFLINE';
export const GET_STATUS = 'GET_STATUS';


export function toggleOnline() {
  const request = axios.put('api/status/',  { currentUserId, 'status':'y' } );
  console.log( ' toggle onlne by', currentUserId)
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

// export function getStatus(){
//   const request = axios.get('api/status/', {params:{ currentUserId } } );
//   return {
//     type: GET_STATUS,
//     payload: request
//   }
// }
