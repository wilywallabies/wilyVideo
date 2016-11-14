import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'

class FriendList extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props')
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e){
    e.preventDefault();
    //need to Add Friends to current user
    this.props.addFriend(this.state.term)

  }
  onInputChange(e){
    console.log(this.state.term)

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

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ addFriend }, dispatch)
}

function mapStateToProps(state){
  return {friend: state.friend}
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
