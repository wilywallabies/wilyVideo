import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteFriend, callUser, retrieveFriends,  getNonFriends } from '../actions/friendsAction';

// import { counter } from '../actions/friendsAction';

class FriendDetail extends React.Component {
  constructor(props){
    super(props);
    console.log(props, 'props, friendDetailContainer')

    this.onClickCall = this.onClickCall.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

    onClickCall(e){
      e.preventDefault();
  }

    deleteUser(e){
      e.preventDefault();
      this.props.deleteFriend(e.target.value);
      console.log(e.target.value, 'delete clicked')
      this.props.getNonFriends();
  }

  render(){
    let user = this.props.friend; //Array of Friends Object
    console.log(user, ' user, friendDetailContainer')

    return (


    <form  className="panel-default">

      { user.map((user, i) => {

        return(
          <div
          key={user.id}
          className="panel-body">

            <div className='col-md-4'>
            <span>
              <button onClick={this.onClickCall} className='btn btn-default  btn-lg'> CALL
              </button>
            </span>

            </div>
              <div className='col-md-8'>
              <div>User ID: {user.userName}

              </div>
              <div>Email: {user.email}</div>
              <span> <button onClick={this.deleteUser} value={user.id} className='btn btn-danger btn-xs'> DELETE </button> </span>
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
  return bindActionCreators({ deleteFriend, callUser, retrieveFriends, getNonFriends }, dispatch)
// const FriendDetail = ({friend}) => (
//   // console.log(user, ' FRIEND DETAIL')
//   console.log(friend, ' FRIEND DETAIL')
//   <div>
//     {friend}
//   </div>
//   )

// function mapStateToProps(state){
//   // console.log(state, ' state friendListContainer.js')
//   return {friend: state.friend}
// }

}

export default connect(null, mapDispatchToProps)(FriendDetail)
