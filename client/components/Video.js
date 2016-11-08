import React from 'react';
import ReactDOM from 'react-dom';

class Video extends React.Component{
  constructor(props) {
    super(props);
    var constraints = window.constraints = {
      audio: false,
      video: true
    };

    this.successCallback = this.successCallback.bind(this);
    this.errorCallback = this.errorCallback.bind(this);
  }

  successCallback(stream) {
    window.stream = stream; // stream available to console

    var video = ReactDOM.findDOMNode(this.refs.local)
    if (window.URL) {
      video.src = window.URL.createObjectURL(stream);
    } else {
      video.src = stream;
    }
  }

  errorCallback(error) {
    console.log('navigator.getUserMedia error: ', error);
 }

  componentDidMount(){
    navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    navigator.getUserMedia(constraints, this.successCallback, this.errorCallback)
  }

  render(){
    return (
      <div>
        <h1>
          Test
        </h1>
    <video className = "local"
      id = "localVideo"
      ref = "local" autoPlay></video>

        <div>
          <button id="startButton">Start</button>
          <button id="callButton">Call</button>
          <button id="hangupButton">Hang Up</button>
        </div>
      </div>
    )
  }
};

export default Video;
