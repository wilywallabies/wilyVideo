import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'
import {retrieveFriends, getAllUser } from '../actions/friendsAction';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props LINE 11')
    this.state = {friend:[], selectedVal:''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
     this.props.getAllUser();
     // this.setState({friend:this.state.friend});
  }

  componentWillReceiveProps(nextProps) {
        // this.setState({friend:nexstProps.friend})

   this.setState({friend: nextProps.friend})
        // console.log(nextProps.friend, 'this.state componentWillReceiveProps friendadd');
  }

  onFormSubmit(e){
    e.preventDefault();
    // need to Add Friends to current user
    console.log(this.refs.selectValue.value, ' this.ref.selectVal')
    this.props.addFriend(this.refs.selectValue.value)
  }

  handleChange(e){
    console.log(e.target.value, ' :Selected Value')
    this.setState( {selectedVal:e.target.value} )

    console.log(this.state, ' this.state after handle change');
  }

  render(){
    return (
      <div>
        Available Users:
      <form onSubmit={this.onFormSubmit} className="input-group">

          <select  onChange={this.handleChange} className="form-control">
          {
            !this.state.friend ? 'Loading Users...' :
            this.state.friend.map( (user, i) => {
              return(
            <option ref='selectValue' value={user.id} key={user.id}>{user.email}</option>)
            })
          }
          </select>

        <span className="input-group-btn">
          <button className="btn btn-secondary">Add</button>
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
