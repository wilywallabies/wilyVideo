import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCurrentUserInfo } from '../actions/friendsAction';
import { toggleOnline } from '../actions/friendsAction';

class UserInfo extends React.Component {
    constructor(props){
    super(props);
    this.state = { currentUser: {email:'', userName:''} };
  }

  componentWillMount() {
    this.props.getCurrentUserInfo();
    this.props.toggleOnline();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentUser:{email:nextProps.user.email,userName:nextProps.user.username}})
  }
  render(){

    return (

      <div>
        <div>
        <h5>Email:  {this.state.currentUser.email}</h5>
        </div>

        <div>
        <h5>UserID: {this.state.currentUser.userName} </h5>
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
  return bindActionCreators({ getCurrentUserInfo  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
