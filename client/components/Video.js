import React from 'react';
import ReactDOM from 'react-dom';
import adapter from 'webrtc-adapter';


import LocalVideo from './LocalVideo';
import Friend from '../containers/friendsMainContainer';

import webrtcModule from './webrtcModule';


class Video extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
    this.token = this.token.bind(this);
    this.ice = this.ice.bind(this);
  }

  token() {
    webrtcModule.getToken()
    console.log('test')
  }

  ice(){
    webrtcModule.getIce()

  }

  render(){

    return (
      <div>
        <h1>
          Test
        </h1>

        <Friend />


        <button onClick={this.token}> Get list of tokens </button>
        <button onClick={this.ice}> Get some ice </button>

      </div>
    )
  }
};

export default Video;
