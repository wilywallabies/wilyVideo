import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteFriend, callUser, retrieveFriends,  getNonFriends } from '../actions/friendsAction';
import { Button } from 'react-bootstrap';

import webrtcModule from '../components/webrtcModule';

class FriendDetail extends React.Component {
  constructor(props){
    super(props);

    this.onClickCall = this.onClickCall.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

    onClickCall(e){

      // console.log('event obj: ' + e.target.value)
      let target = e.target.value
      window.targetUsername = e.target.value
      e.preventDefault();
        let p1 = new Promise((resolve, reject) => {
          resolve(webrtcModule.invite())

        })
        p1.then((localSrc) => {


          console.log("local",localSrc)
          this.setState({localVideo:true})
          console.log(this.state)
        })
  }

    deleteUser(e){
      console.log(e.target.value, 'delete clicked');
      e.preventDefault();
      this.props.deleteFriend(e.target.value)
       .then(()=>{
        this.props.getNonFriends();
        this.props.retrieveFriends();
    });
  }

  render(){

    let user = this.props.friend; //Array of Friends Object
    let redDot = {"borderRadius": "50%",
                   "width": "15px",
                   "height": "15px",
                   "top":"0",
                   "right":"0",
                   "backgroundColor":"red"
                  }
    let greenDot = {"borderRadius": "50%",
                   "width": "15px",
                   "height": "15px",
                   "top":"0",
                   "right":"0",
                   "backgroundColor":"green"
                  }
    let yellowDot = {"borderRadius": "50%",
                   "width": "15px",
                   "height": "15px",
                   "top":"0",
                   "right":"0",
                   "backgroundColor":"#E49B0D"
                  }
    return (
    <form  className="panel-default">

      { user.map((user, i) => {
        return(
          <div
          key={ user.id }
          className="panel-body">

            <div className='col-md-4'>
            <span>

              <button value={user.userName} onClick={ this.onClickCall } className='btn btn-default  btn-lg'> CALL
              </button>
            </span>

            </div>
              <div className='col-md-8'>
              <div>User ID: { user.userName }
              </div>

              <div>Email: { user.email }
              </div>
              {
              user.onlineStatus === 'y' ?
               <svg style={greenDot} /> : user.onlineStatus === 'away' ? <svg style={yellowDot} /> : <svg style={redDot} />
              }
              <span> <button onClick={ this.deleteUser } value={ user.id } className='btn btn-danger btn-xs'>  DELETE </button> </span>
              <hr/>
            </div>
          </div>
           )
        })
       }
    </form>
    )
  }

}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ deleteFriend, callUser, retrieveFriends, getNonFriends }, dispatch);
}

export default connect(null, mapDispatchToProps)(FriendDetail)
