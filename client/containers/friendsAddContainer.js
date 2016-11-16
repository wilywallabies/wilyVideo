import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'
import { retrieveFriends, getAllUser } from '../actions/friendsAction';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props LINE 11')
    this.state = {notFriend:[], selectedVal:''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
     this.props.getAllUser();
  }


  //Sets friend as state after component when props has been changed
  componentWillReceiveProps(nextProps) {
   this.setState({notFriend: nextProps.notFriend})
    console.log(this.state, 'componentWillReceiveProps');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(this.state, 'ComponentWillUpdate')
  }

  // invoked immediately after updating occurs
  componentDidUpdate(prevProps, prevState) {
       // this.setState({selectedVal:this.refs.selectValue.value})
    console.log(this.state, ' COMPONENTDIDMOUNT')
  }

  //Add friend to database
  onFormSubmit(e){
    e.preventDefault();
    // need to Add Friends to current user
    this.props.addFriend(this.state.selectedVal)
    this.props.retrieveFriends();
  }

  handleChange(e){
    // console.log(e.target.value, ' :Selected Value')
    let id = e.target.value;
    this.setState( {selectedVal:id} );
  }

  render(){
    return (
      <div>
        Available Users:
      <form onSubmit={this.onFormSubmit} className="input-group">
          <select onChange={this.handleChange} className="form-control">
          {
            !this.state.notFriend ? 'Loading Users...' :
             this.state.notFriend.map( (user, i) => {
              return(
            <option  value={user.id} key={user.id}>{user.email}</option> )
            })
          }
          </select>

        <span className="input-group-btn">
          <button className="btn btn-primary"> Add </button>
        </span>
      </form>
      </div>
      )
  }
}
function mapStateToProps(state){
  console.log(state, 'AllUser except friend and curr, container/friendsAddContainer.js')

  // console.log(state.friend[0], 'AllUser except friend and curr, container/friendsAddContainer.js')
  //  console.log(state.friend[1], 'AllUser except friend and curr, container/friendsAddContainer.js')
  return {notFriend: state.friend[0],friend:state.friend[1]}
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends, addFriend, getAllUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendAdd)
