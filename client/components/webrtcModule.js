'use strict'

import axios from 'axios';
import adapter from 'webrtc-adapter';
let token = null;
let myHostname = window.location.hostname;
const getToken = () => {
  axios.post('/webrtc/signal/token')
  .then((res) => {
    console.log('test2');
    console.log(res.data.d, 'this is the res');
    token = res.data.d
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
let clientID = 0;

let mediaConstraints = {
  audio: true,
  video:true
};

let myUsername = null;
let targetUsername = null;
let myPeerConnection = null;
let localSrc = null;

const connect = () => {
  // axios.post('/webrtc/signal/token')
  // .then((res) => {
  //   console.log('test2');
  //   console.log(res.data.d, 'this is the res');
  //   token = res.data.d.token
  // })
  // .then((res) => {
  //   console.log('got token: ' + token);
  //   connection = new WebSocket('ws://endpoint01.uswest.xirsys.com:443/'+token, 'json')
  //   console.log("connection: " + connection);
  // })

  let serverUrl;
  let scheme = "ws";
    serverUrl = scheme + "://" + myHostname + ":6503";
    connection = new WebSocket(serverUrl, "json");
  connection.onmessage = (event) => {
    let msg = JSON.parse(event.data);

    switch(msg.type) {
      case "id":
        clientID = msg.id;
        setUsername();
        break;

        case "username":
          console.log("<b>User <em>" + msg.name + "</em> signed in at " + time.toLocaleTimeString() + "</b><br>");
          break;

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

const setUsername = () => {
  sendToServer({
    name: window.myUsername,
    date: Date.now(),
    id: clientID,
    type: "username"
  })
}
const handleVideoOffer= (msg) => {
  let localStream = null;

  targetUsername = msg.name;
  console.log("starting to accept invitation from " + targetUsername)
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
      name: window.myUsername,
      target: window.targetUsername,
      type: "videoAnswer",
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

  console.log("Add received ICE candidate: " + JSON.stringify(candidate))
  myPeerConnection.addIceCandidate(candidate)
    .catch((err) => {
      console.error(err.name)
    })
}

const createPeerConnection = () => {
  let config = getIce()
  var icePromise = new Promise((resolve, reject) => {
    resolve(getIce())
  })
  icePromise.then()
  myPeerConnection = new RTCPeerConnection(config);

  myPeerConnection.onicecandidate = (event) => {
    if(event.candidate){
      sendToServer({
        type: "newIceCandidate",
        target: window.targetUsername,
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
          name: window.myUsername,
          target: window.targetUsername,
          type: "videoOffer",
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

const hangUpCall = () => {
  closeVideoCall()
  sendToServer({
    name: window.myUsername,
    target: window.targetUsername,
    type: 'hangUp'
  })
}

const handleSendButton = () => {
  var msg = {
    text: text.value,
    type: "message",
    id: clientID
  };
  sendToServer(msg);
}
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
