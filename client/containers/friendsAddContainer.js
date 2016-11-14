import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'
import { getAllUser } from '../actions/friendsAction';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props')
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    // let userContainer = this.props.getAllUser();
    // console.log(userContainer, ' userContainer');

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
      // <div>this.props</div>
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
  return bindActionCreators({ addFriend, getAllUser}, dispatch)
}

function mapStateToProps(state){
  return {friend: state.friend}
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendAdd)
