import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveFriends } from '../actions/friendsAction';

class FriendDetail extends React.Component {
    constructor(props){
    super(props);
    console.log(props, ' friendsDetail Props')
  }
     componentDidMount(){
      //call friends list and render
      this.props.retrieveFriends();
      console.log('component did mount, friendsDetailContainer');
    }
  render(){

    return (
      <div>
        <p>Retrieve all friends from user</p>

      </div>
      )
  }
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends }, dispatch)
}


export default connect(null, mapDispatchToProps)(FriendDetail)
