import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';

class Friend extends React.Component {

  render(){

    return (
      <div>
        <div className="col-md-4 panel panel-defaults" className="friendList">

          <FriendAdd />
          <FriendDetail />
        </div>
      </div>
      )
  }
}



export default Friend