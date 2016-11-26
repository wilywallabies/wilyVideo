import React from 'react';

import { Link, browserHistory } from 'react-router';
// import css from '../../styles/style.scss';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Modal } from 'react-bootstrap';


import SignupForm from './Signup';
import LogInForm from './Login.js';

import { signUpUser, loginUser, logoutUser } from '../actions/accountActions';
import { toggleOffline } from '../actions/onlineStatusActions';

class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.logoutSubmit = this.logoutSubmit.bind(this);
  }

  handleInputChange(input) {
    var stateObj = {};
    stateObj[input.target.name] = input.target.value;
    this.setState(stateObj);
  }

  logoutSubmit(e) {
    e.preventDefault();
    console.log("LOGOUTSUBMIT", this.props);
    this.props.logoutUser();
    this.props.toggleOffline()
  }

  renderLinks(){
    console.log("PROPS", this.props);
    if(this.props.authenticated){
      // browserHistory.push('/video')

      return <li className="nav-item">

        <Button onClick={this.logoutSubmit}>Logout</Button>
      </li>
    } else {
      return [
      <li className="nav-item" key={1}>

        <Button bsStyle="warning" onClick={() => {browserHistory.push('/signup')}}>Sign Up</Button>
        <Button bsStyle="warning" onClick={() => {browserHistory.push('/login')}}>Log In</Button>
        {/* SIGNUP FORM MODAL
          <SignupForm signUpUser={this.props.signUpUser} handleInputChange={this.handleInputChange} />
      </li>,
      <li className="nav-item" key={2}>
      */}
      {/* LOGIN MODAL   */}
      <LogInForm loginUser={this.props.loginUser} handleInputChange={this.handleInputChange} />

    </li>

      ];
    }
  }



 render(){
  return (
    <nav className="navbar navbar-light">
      <ul className="nav navbar-nav">
        {this.renderLinks()}
      </ul>
      <h1 className="title" >
        <Link to="/">WilyVideo</Link>
      </h1>
      {this.props.authenticated ?
        <Button
          bsStyle="warning"
          style={{'display':'inline', 'float': 'right'}}
          onClick={() => {browserHistory.push('/profile')}}
        >
          Profile
        </Button>

        :
        ''
      }
    </nav>
  );
 }



}

function mapStateToProps(state) {
  return {
    authenticated: state.isAuthorized
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ signUpUser, loginUser, logoutUser, toggleOffline }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
