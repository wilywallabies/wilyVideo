import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction'
import { retrieveFriends, getNonFriends } from '../actions/friendsAction';
import FriendDetail from './friendDetailContainer';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    console.log(props, ' friendsAddContainer Props LINE 11');
    this.state = {nonFriends:[], selectedVal:''};
    this.state.selectedUserName = '';
    this.state.defaultValue = 'Available Users'
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refreshNonFriends = this.refreshNonFriends.bind(this);
  }


//Triggered before render().
  componentWillMount() {
     this.props.getNonFriends();
  }
  //Sets friend as state after component when props has been changed
  //Called before render when props change. Access to old props. It is not triggered after the component is mounted.
  componentWillReceiveProps(nextProps) {
    // console.log(this.nextProps, 'THIS.NEXTPROPS frindsAddContainer');

   this.setState({nonFriends: nextProps.nonFriends});
    console.log(this.state, 'componentWillReceiveProps, friendsAddContainer');
  }


//invoked immediately before rendering when new props or state are being received.
  componentWillUpdate(nextProps, nextState) {
    console.log('*componentWillUpdate Fired!');
    console.log(this.state, 'this. state componentWillUpdate ');

    console.log(nextProps, 'nextProps friendsAddContainer')
    console.log(nextState, 'nextState friendsAddContainer')
   // this.setState({nonFriends: this.state.friend})

    // <FriendDetail friend={this.state}  />


  }

  // invoked immediately after updating occurs
  componentDidUpdate(prevProps, prevState) {
    console.log('*componentDidUpdate Fired!');
       // this.setState({selectedVal:this.refs.selectValue.value})
    console.log(prevProps, 'prevProps friendsAddContainer')
    console.log(prevState, 'prevState friendsAddContainer')
    console.log('get non friends for friend add container', this.state)
     // this.props.getNonFriends();
     // this.setState({nonFriends: this.state.friend})

  }

  //Add friend to database
  onFormSubmit(e){
    e.preventDefault();
    // need to Add Friends to current user
    this.props.addFriend(this.state.selectedVal)
    .then(()=>{
      console.log('THIS IS .THEN!!!');
      this.props.retrieveFriends();

    this.props.getNonFriends();

    })

    // this.props.getNonFriends();



    // this.props.retrieveFriends();
  }

  handleChange(e){
    let id = e.target.value;
    console.log(id)
    this.setState( {selectedVal:id} );
  }

  refreshNonFriends(){

    this.props.getNonFriends()
  }

  render(){
    return (
      <div>

      <button onClick={this.refreshNonFriends}>REFRESH?? TEST!</button>
      <form onSubmit={this.onFormSubmit} className="input-group">
          <select onChange={this.handleChange} className="form-control">
            <option selected="selected" disabled> Available Users </option>
          {
            !this.state.nonFriends ? 'Loading Users...' :
             this.state.nonFriends.map( (user, i) => {
              return(
            <option  value={user.id} key={user.id}> Email: {user.email}</option> )
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
  console.log(state, 'AllUser except friend and curr, friendsAddContainer')

  // console.log(state.friend[0], 'AllUser except friend and curr, container/friendsAddContainer.js')
  //  console.log(state.friend[1], 'AllUser except friend and curr, container/friendsAddContainer.js')
  // return {nonFriends: state.friend[0],friend:state.friend[1]}
  return {nonFriends: state.friend[0]}
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends, addFriend, getNonFriends}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendAdd)
