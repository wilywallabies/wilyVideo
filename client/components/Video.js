import React from 'react';
import ReactDOM from 'react-dom';
import adapter from 'webrtc-adapter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';
import { retrieveFriends, getNonFriends, getCurrentUserInfo } from '../actions/friendsAction';


import LocalVideo from './LocalVideo';
import Friend from './Friend';
import CurrentUser from './CurrentUser';
import Footer from './Footer';
import webrtcModule from './webrtcModule';
import {  Col, Row, Grid, Button } from 'react-bootstrap';
import { logoutUser } from '../actions/accountActions';
import { toggleOffline } from '../actions/onlineStatusActions';


class Video extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      localVideo: false
    }


    this.ice = this.ice.bind(this);
    this.logoutSubmit = this.logoutSubmit.bind(this);

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
  // componentWillMount(){
  //   console.log('componentWIllMoun')
  //   this.props.retrieveFriends();
  //   this.props.getNonFriends();
  //   this.props.getCurrentUserInfo();
  // }
  componentDidMount(){
    console.log('component did Mount!!@$!@$!@$!@')

    this.props.retrieveFriends();
    this.props.getNonFriends();
    this.props.getCurrentUserInfo();
  }

  ice(){
    webrtcModule.getIce()

  }

  logoutSubmit(e) {
    e.preventDefault();
    console.log("LOGOUTSUBMIT", this.props);
    this.props.toggleOffline()
    .then(()=>{

    this.props.logoutUser();
    })
    browserHistory.push('/login')
  }

  render(){
    console.log('render() called video.js')
    return (
      <div>
        <h1>
          Test
        </h1>
          <Button onClick={this.logoutSubmit}>Logout</Button>
        <CurrentUser />
        <Friend />
        <Col xs={6} md={4} >
          <LocalVideo/>
          <hr/>
          <video src={window.remoteSrc} autoPlay> </video>

        <Col xs={6} xsOffset={6} />
          <div >
            <input type="Button" id="send" name="send" value="Send"
              onClick={webrtcModule.handleSendButton} disabled></input>
            <Button onClick={webrtcModule.connect}> Connect </Button>
            <Button onClick={this.invite}> Invite </Button>
            <Button onClick={this.ice}> Get some ice </Button>
            <Button onClick={webrtcModule.hangUpCall}> Hang Up </Button>

          </div>
        </Col>

        <Footer />
      </div>
    )
  }
};

// export default Video;


// function mapStateToProps(state) {
//   return {
//     authenticated: state.isAuthorized
//   }
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleOffline, logoutUser, retrieveFriends, getNonFriends, getCurrentUserInfo }, dispatch)
}

export default connect(null, mapDispatchToProps)(Video)
