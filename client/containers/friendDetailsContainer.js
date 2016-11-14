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
  renderFriend(friend){
    console.log(friend, ' friend---');
    return friend.map((user,i) => {
       console.log(user[0].user_id2, i , 'hi')
       console.log(user[1].user_id2, i , 'hi')

      return (<div key={i}> User:{user.user_id2}</div>)
    })
  }
  render(){

    return (
          <div className="panel-group">
            <div className="panel panel-default">
            <div className="panel-heading">Contacts</div>



              <div className="panel-body">
              {this.renderFriend(this.props.friend)}

            {/* this.renderFriend(user, i) */}

              </div>

            </div>

          </div>
      )
  }
}
function mapStateToProps(state){
  console.log(state, ' state friendDetailContainer.js')
  return {friend: state.friend}
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendDetail)
