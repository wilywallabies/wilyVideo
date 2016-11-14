import React from 'react';
import { connect } from 'react-redux';
import FriendAdd from './friendsAddContainer';
import FriendDetail from './friendListContainer';


export default class Friend extends React.Component {
  render(){
    return (
      <div className="col-md-5 panel panel-default">
        <FriendDetail />
        <FriendAdd />

      </div>
      )
  }
}