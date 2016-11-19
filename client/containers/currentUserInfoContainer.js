import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  } from '../actions/friendsAction';

class UserInfo extends React.Component {
    constructor(props){
    super(props);
  }


  render(){
    return (
      <div></div>

      )
  }

}

// function mapStateToProps(state){
//   return {
//   };
// }

//binds action and container
function mapDispatchToProps(dispatch){
  return bindActionCreators({   }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserInfo);
