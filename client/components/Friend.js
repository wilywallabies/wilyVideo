import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';

class Friend extends React.Component {

  render(){
    let style = {"float":"right",
                 "display": "inline",
                 "height": "auto",
                 "width": "40%",
                 "overflowY":"auto"};
    return (
      <div>
        <div className="col-md-4 panel panel-defaults" style={style}>

          <FriendAdd />
          <FriendDetail />
        </div>
      </div>
      )
  }
}



export default Friend