import React from 'react';

class FriendDetail extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' FriendDetail props')
  }

  render(){
    let user = this.props.friend; //Array of Object

    return (
    <div className="panel-default">
    <div className="panel  panel-info text-center">Contacts</div>
      {user.map((user, i) => {
        return( <div  className="panel-body" key={i}>{user.user_id2}</div> )
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