import React from 'react';
import { connect } from 'react-redux';

export default class FriendList extends React.Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(e){
    e.preventDefault();
    //need to Add Friends to current user

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
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      )
  }
}