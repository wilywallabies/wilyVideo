import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addFriend } from '../actions/friendsAction';
import { retrieveFriends, getNonFriends } from '../actions/friendsAction';
import FriendDetail from './friendDetailContainer';
import { Button, FormControl, FormGroup, DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';

class FriendAdd extends React.Component {
  constructor(props){
    super(props);
    this.state = {nonFriends:[], selectedVal:'', defaultVal:'Available Users', addBtn:false};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//Triggered before render().
  componentWillMount() {
     this.props.getNonFriends();
  }

  //Sets friend as state after component when props has been changed
  //Called before render when props change. Access to old props. It is not triggered after the component is mounted.
  componentWillReceiveProps(nextProps) {
   this.setState( {nonFriends: nextProps.nonFriends} );
  }

  //Add friend to database
  onFormSubmit(e){
    e.preventDefault()
    // need to Add Friends to current user
    this.props.addFriend(this.state.selectedVal)
      .then(()=>{
        this.props.retrieveFriends();
        this.props.getNonFriends();
       this.setState( {selectedVal:'', defaultVal:'Available Users', addBtn:false } );

    })
      // this.props.getNonFriends();
  }

  handleChange(e){
    console.log(e, ' changed')
    // let id = e.target.value;
    this.setState( {selectedVal:e[0], defaultVal:e[1], addBtn:true } );

  }

  render(){
    let addBtn;
    if(this.state.addBtn){
      addBtn =  ( <Button type="submit" bsStyle="info"> Add </Button> )
    }



    return (
      <div className="addFriendField">
        <h5 className="text-center">Search Users</h5>

        <form  onSubmit={this.onFormSubmit} className="input-group">
              <ButtonGroup>
            <DropdownButton title={this.state.defaultVal} onSelect={((e)=> this.handleChange(e) )} >
              {
              !this.state.nonFriends ? 'Loading Users...' :
                 this.state.nonFriends.map( (user, i) => {

                  return(

                    <MenuItem eventKey={ [user.id, user.email] } > Email: {user.email} </MenuItem>
                  )
                })
              }

            </DropdownButton>
                 {addBtn}

              </ButtonGroup>
        </form>
      </div>
      )
  }
}

function mapStateToProps(state){
  return {nonFriends: state.friend[0]}
}

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({ retrieveFriends, addFriend, getNonFriends}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendAdd)
