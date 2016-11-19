'use strict'

import axios from 'axios';
import adapter from 'webrtc-adapter';

const getToken = () => {
  axios.post('/webrtc/signal/token')
  .then((res) => {
    console.log('test2');
    console.log(res.data.d, 'this is the res');
  })
  .catch((err) => console.error(err))
};

const getIce = () => {
  axios.post('/webrtc/ice')
  .then((res) => {

    console.log('res', res.data.d.iceServers)
    return res.data.d;
  })
  .catch((err) => console.error(err))
};
//Websocket signaling channel variables
let connection = null;


let mediaConstraints = {
  audio: true,
  video:true
};

let myUsername = null;
let targetUsername = null;
let myPeerConnection = null;
let localSrc = null;

const connect = () => {
  connection = new WebSocket('ws://endpoint01.uswest.xirsys.com:443/ws', 'json')
  console.log("connection: " + connection);
  connection.onmessage = (event) => {
    let msg = JSON.parse(event.data);

    switch(msg.type) {
      case "videoOffer":
        handleVideoOffer(msg);
        break;

      case "videoAnswer":
        handleVideoAnswer(msg);
        break;

      case "newIceCandidate":
        handleNewICECandidate(msg);
        break;

      case "hangUp":
        handleHangUp(msg);
        break;

      default:
        console.error("Unknown message received: " + msg)
    }

  }
}
const handleVideoOffer= (msg) => {
  let localStream = null;

  targetUsername = msg.name;
  createPeerConnection();

  let desc = new RTCSessionDescription(msg.sdp);

  myPeerConnection.setRemoteDescription(desc).then(
    () => {
      console.log("Set up local media stream")
      return navigator.mediaDevices.getUserMedia(mediaConstraints)
    })
  .then((stream) => {
    console.log('local video stream obtained')
    localStream = stream;
    window.localSrc = URL.createObjectURL(localStream)

  })
  .then(() => {
    console.log ('Creating Answer')
    return myPeerConnection.createAnswer();
  })
  .then((answer) => {
    console.log("set local description after creating answer")
    return myPeerConnection.setLocalDescription(answer);
  })
  .then(() => {
    let msg = {
      name: myUsername,
      target: targetUsername,
      type: "video-answer",
      sdp: myPeerConnection.localDescription
    };
    console.log('Send answer back to other peer');
    sendToServer(msg);
  })
  .catch((err) => {
    console.error(err);
  })
}

const handleVideoAnswer = () => {
  console.log("Recipient has accepted call");
  let desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch((err) => {
    console.error(err.name);
  })
}

const handleNewICECandidate = (msg) => {
  let candidate = new RTCIceCandidate(msg.candidate);
  myPeerConnection.addIceCandidate(candidate)
    .catch((err) => {
      console.error(err.name)
    })
}

const createPeerConnection = () => {
  let config = getIce()
  myPeerConnection = new RTCPeerConnection(config);

  myPeerConnection.onicecandidate = (event) => {
    if(event.candidate){
      sendToServer({
        type: "newIceCandidate",
        target: targetUsername,
        candidate: event.candidate
      })
    }
  }

  myPeerConnection.onnegotiationneeded = () => {
    console.log('negotiation needed');

    myPeerConnection.createOffer().then(
      (offer) => {
        console.log('create new description to send to remote peer');
        return myPeerConnection.setLocalDescription(offer);
      })
      .then(() => {
        console.log('send offer to remote peer');
        sendToServer({
          name: myUsername,
          target: targetUsername,
          type: "video-offer",
          sdp: myPeerConnection.localDescription
        });
      })
      .catch((err) => {
        console.error(err.name)
      })
  }
  // myPeerConnection.onAddStream = (event) => {
  //
  // }

  // myPeerConnection.onIceConnectionStateChange = (event) => {
  //
  // }
};

const invite = (event) => {
  if (myPeerConnection) {
    alert("Call already open")
  }
  createPeerConnection();

  navigator.mediaDevices.getUserMedia(mediaConstraints)
    .then((localStream) => {
       window.localSrc = URL.createObjectURL(localStream);
       myPeerConnection.addStream(localStream);
       return window.localSrc;
    });
};
//Send Javascript object by converting to JSON and sending through Websocket connection
const sendToServer= (msg) => {
  let msgJSON = JSON.stringify(msg);
  connection.send(msgJSON);
};

// Module for use in React component
let webrtcModule = {
  invite: invite,
  getIce: getIce,
  connect: connect
};


export default webrtcModule;
