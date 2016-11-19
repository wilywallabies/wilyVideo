import React from 'react';
import ReactDOM from 'react-dom';
import adapter from 'webrtc-adapter';


import LocalVideo from './LocalVideo';
import Friend from './Friend';
import CurrentUser from './CurrentUser';

import webrtcModule from './webrtcModule';


class Video extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      localVideo: false
    }
    this.invite = this.invite.bind(this);

    this.ice = this.ice.bind(this);

  }

  invite() {
    let p1 = new Promise((resolve, reject) => {
      resolve(webrtcModule.invite())

    })
    p1.then((localSrc) => {


      console.log("local",localSrc)
      this.setState({localVideo:true})
      console.log(this.state)
    })


  }
  componentDidMount(){

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

        <CurrentUser />
        <Friend />

        <LocalVideo/>
        <button onClick={webrtcModule.connect}> Connect </button>
        <button onClick={this.invite}> Invite </button>
        <button onClick={this.ice}> Get some ice </button>

      </div>
    )
  }
};

export default Video;
