import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';


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