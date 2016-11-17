import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveFriends, getAllUser } from '../actions/friendsAction';
import FriendDetail from './friendDetailContainer';

class FriendList extends React.Component {
    constructor(props){
    super(props);
    // console.log(props, ' containers/friendsList Props');
  }
     componentWillMount(){
      //call friends list and render
      this.props.retrieveFriends();
    }
    componentWillReceiveProps(nextProps) {
      // console.log(this.nextProps, 'this.NEXTPROPS, frinedListContainer');
      // this.props.retrieveFriends();
    }
  render(){
    // console.log("THIS.PROPS.FRIEND", this.props.friend)
    let friend = this.props.friend[1];
      // console.log(friend, ' this.props LINE 21, friendDetail');
    return (
          <div >
            <div className="panel-group">
            <div className="panel  text-center">
              <h4>Contacts</h4>
            </div>
              {
                !friend ? "Loading...":
               <FriendDetail friend={friend}  />
              }
            </div>
          </div>
      )
  }
}

function mapStateToProps(state){
  // console.log(state, ' state friendListContainer')
  return {friend: state.friend}
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends, getAllUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
