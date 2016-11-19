import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';


export default class Friend extends React.Component {
  render(){
    let style = {"float":"right",
                 "display": "inline",
                 "height": "auto",
                 "overflowY":"auto"};
    return (
      <div className="col-md-4 panel panel-defaults" style={style}>
        <FriendAdd />
        <FriendDetail />
      </div>
      )
  }
}