import React from 'react';
import { connect } from 'react-redux';

export default class FriendList extends React.Component {
  render(){
    return (
      <div>
        <form className="input-group">
          Search: <input type="text"/>
          <span>
            <button type="submit" className="btn btn-secondary">Add</button>
          </span>
        </form>
      </div>
      )
  }
}