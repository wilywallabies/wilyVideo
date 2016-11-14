import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'
import {retrieveFriends, getAllUser } from '../actions/friendsAction';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props')
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentWillMount() {
     this.props.getAllUser();
     console.log(this.props, ' this.props line 19, friendadd')
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
      <form onSubmit={this.onFormSubmit} className="input-group">

        <input
         placeholder="Search User"
         className="form-control"
         value={this.state.term}
         onChange={this.onInputChange}
         type="text"/>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Add</button>
        </span>
      </form>
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
