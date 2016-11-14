import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'
import {retrieveFriends, getAllUser } from '../actions/friendsAction';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props')
    this.state = {term: '', friend:[]};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
     this.props.getAllUser();
     // this.setState({friend:this.state.friend});
  }

  componentWillReceiveProps(nextProps) {
        // this.setState({friend:nexstProps.friend})

   this.setState({term: '', friend: nextProps.friend})
        console.log(nextProps.friend, 'this.state componentWillReceiveProps friendadd');
  }

  onFormSubmit(e){
    e.preventDefault();
    //need to Add Friends to current user
    this.props.addFriend(this.state.term)
  }

  onInputChange(e){
    this.setState({term: e.target.value});
  }

  render(){
    return (
      <div>
        Available Users:
      <form onSubmit={this.onFormSubmit} className="input-group">

          <select className="form-control">
          { !this.state.friend ? 'Loading Users...' :
            this.state.friend.map( (user, i) => {return(
            <option value='user.id' key={user.id}>{user.email}</option>) })
          }
          </select>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Add</button>
        </span>
      </form>
      </div>

      )
  }
}
function mapStateToProps(state){
  console.log(state.friend[0], 'AllUser except friend and curr')
  return {friend: state.friend[0]}//Array of Object(All Users)
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends, addFriend, getAllUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendAdd)
