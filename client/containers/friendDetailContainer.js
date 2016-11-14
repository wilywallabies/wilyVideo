import React from 'react';

class FriendDetail extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' containers/FriendDetail props')
  }

  render(){
    let user = this.props.friend; //Array of Object
    console.log(user, ' USER, FRIENDDETAILCONTAINER')
    return (
    <div className="panel-default">

      {user.map((user, i) => {
        return(
          <div
          className="panel-body"
          key={user.id}>
          <div>User ID: {user.userName}</div>
          <div>Email: {user.email}</div>
          </div>
           )
      })}
    </div>
    )
  }

}


// const FriendDetail = ({friend}) => (
//   // console.log(user, ' FRIEND DETAIL')
//   console.log(friend, ' FRIEND DETAIL')
//   <div>
//     {friend}
//   </div>
//   )
export default FriendDetail;