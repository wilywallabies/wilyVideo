import React from 'react';
import ReactDOM from 'react-dom';
import adapter from 'webrtc-adapter';

import LocalVideo from './LocalVideo';

class Video extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      startButton: {
        disabled: false
      },
      hangupButton: {
        disabled:true
      },
      servers: null,
      localVideo:null
    }
   this.gotStream = this.gotStream.bind(this);
   this.start = this.start.bind(this);
   this.call = this.call.bind(this);
   this.onIceCandidate = this.onIceCandidate.bind(this);
   this.getOtherPc = this.getOtherPc.bind(this);
  }

  getName(pc) {
    return (pc === pc1) ? 'pc1' : 'pc2';
  }

  getOtherPc(pc) {
    return (pc === pc1) ? pc2: pc1;
  }

  //Once local stream has been obtained, set state to stream
  gotStream(stream) {
    this.setState({localVideo : stream});
  }

  //Function for when the start button is clicked.
  //Obtains local video from webcam
  start() {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video:true
    })
    .then(this.gotStream)
    .catch(
      (e) => {console.log('getUserMedia() error:' + e.name)}
    );

  }

  call() {
    let videoTracks = this.state.localVideo.getVideoTracks();
    let audioTracks = this.state.localvideo.getAudioTracks();

    let servers = null;

    let pc1 = new RTCPeerConnection(servers);
    pc1.onicecandidate = e => this.onIceCandidate(pc1, e);
  }


  onIceCandidate(pc, event) {
    if(event.candidate) {
      getOtherPc(pc).addIceCandidate(
        new RTCIceCandidate(event.candidate)
      )
    }

  }

  render(){

    return (
      <div>
        <h1>
          Test
        </h1>
        <LocalVideo localVideo={this.state.localVideo}></LocalVideo>

        <div>
          <button id="startButton" onClick={this.start}>Start</button>
          <button id="callButton">Call</button>
          <button id="hangupButton">Hang Up</button>
        </div>
      </div>
    )
  }
};

export default Video;
