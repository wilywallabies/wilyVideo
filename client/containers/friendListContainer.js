import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveFriends } from '../actions/friendsAction';
import FriendDetail from './friendDetailContainer';

class FriendList extends React.Component {
    constructor(props){
    super(props);
    console.log(props, ' friendsDetail Props')
  }
     componentWillMount(){
      //call friends list and render
      this.props.retrieveFriends();
      console.log('component did mount, friendsDetailContainer');
    }

  render(){

    return (
          <div >
            <div className="panel-group">
              {
                !this.props.friend ? "Loading...":
                this.props.friend.map((user, i) => (
               <FriendDetail key={i} friend={user}  />
                ))
              }
            </div>
          </div>
      )
  }
}
function mapStateToProps(state){
  console.log(state, ' state friendListContainer.js')
  return {friend: state.friend}
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
