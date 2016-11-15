import React from 'react';

class FriendDetail extends React.Component {
  constructor(props){
    super(props);
    // console.log(props, ' containers/FriendDetail props')
  }

    onClickCall(e){
      e.preventDefault();
      console.log(e.target.value , 'call clicked')
  }
    deleteUser(e){
      e.preventDefault();
      console.log(e.target.value, 'delete clicked')
  }

  render(){
    let user = this.props.friend; //Array of Object
    // console.log(user, ' USER, FRIENDDETAILCONTAINER')
    return (
    <form  className="panel-default">
      {user.map((user, i) => {
        return(

          <div
          key={user.id}
          className="panel-body">

            <div className='col-md-4'>
            <span>
              <button onClick={this.onClickCall} className='btn btn-default  btn-lg'> CALL
              </button>
            </span>

            </div>
              <div className='col-md-8'>
              <div>User ID: {user.userName}

              </div>
              <div>Email: {user.email}</div>
              <span> <button onClick={this.deleteUser} className='btn btn-danger btn-xs'> DELETE </button> </span>
              <hr/>
            </div>
          </div>
           )
        })
       }
    </form>
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