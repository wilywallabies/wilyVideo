'use strict'

import axios from 'axios';

const getToken = () => {
  axios.post('/webrtc/signal/token')
  .then((res) => {
    console.log('test2');
    console.log(res, 'this is the res');
  })
  .catch((err) => console.error(err))
};

const getIce = () => {
  axios.post('/webrtc/ice')
  .then((res) => {
    console.log('testingIce')
  })
  .catch((err) => console.error(err))
};

let webrtcModule = {
  getToken : getToken,
  getIce : getIce

};


export default webrtcModule;
