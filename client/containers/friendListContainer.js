import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrieveFriends } from '../actions/friendsAction';
import FriendDetail from './friendDetailContainer';

class FriendList extends React.Component {
    constructor(props){
    super(props);
  }
     componentWillMount(){
        this.props.retrieveFriends()
      // call friends list and render

      //updates friend status every 5 seconds.
      setInterval(  ()=>{
        console.log(' set Interval Called!')
        this.props.retrieveFriends()
      }, 30000 );

    }

  render(){
    let friend = this.props.friend[this.props.friend.length-1];
    // let friend = this.props.friend[1];
    return (
          <div>
            <div className="panel-group">
            <div className="panel text-center">
              <h4>Contacts</h4>
            </div>
              {
                !friend ? "Loading...":
               <FriendDetail friend={friend} />
              }
            </div>
          </div>
      )
  }

}

function mapStateToProps(state){
  // console.log(state.friend , ' AFTER UPDATED!!!!')
  return {friend: state.friend };
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
