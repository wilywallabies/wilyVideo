import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUserInfo } from '../actions/friendsAction';
import { toggleOnline, changeStatus } from '../actions/onlineStatusActions';
import { Button, FormControl, FormGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import webrtcModule from '../components/webrtcModule';

class UserInfo extends React.Component {
    constructor(props){
    super(props);
    this.state = { currentUser: {email:'', userName:'', status:''} };
  }

  componentWillMount() {
    this.props.toggleOnline()
    .then(()=>{
      this.props.getCurrentUserInfo();
    })
  }

  //After receiving new prop, will set as this.setState using nextProps
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps, ' MY NEXT PROPS!')
    window.myUsername = nextProps.user.username;
    console.log(window.myUsername, " check my user id")
    this.setState( {currentUser:{email:nextProps.user.email,userName:nextProps.user.username, status: nextProps.user.status}});
  }

  handleChange(e){
    this.props.changeStatus(e);
  }

  render(){

    return (

      <div>
        <div>
          <h5>Email: {this.state.currentUser.email} </h5>
        </div>

        <div>
         <h5>UserID: {this.state.currentUser.userName} </h5>
        </div>

        <div>

          <h5 > Status:

          {
            this.state.currentUser.status === 'y' ? ' Online ' :
            this.state.currentUser.status === 'away' ? ' Away ' : ' Offline Mode '
          }
          {
          this.state.currentUser.status === 'y' ?
           <svg className="greenDot" /> : this.state.currentUser.status === 'away' ? <svg className="yellowDot" /> : <svg className="redDot" />
          }
          </h5>
              <DropdownButton bsStyle="info" onSelect={ (val) => this.handleChange(val) } title="Change Status" id="bg-nested-dropdown" >
                <MenuItem bsStyle="success" eventKey="y">Online</MenuItem>
                <MenuItem bsStyle="warning" eventKey="away">Away</MenuItem>
                <MenuItem bsStyle="danger" eventKey="n">Offline Mode</MenuItem>
              </DropdownButton>
        </div>
      </div>
      )
  }
}

function mapStateToProps(state){
  return {
    user: state.currentUser
  }
}
//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ getCurrentUserInfo, toggleOnline, changeStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
