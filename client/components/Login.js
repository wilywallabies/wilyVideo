import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../actions/accountActions';
import { Form, FormGroup, FormControl, ControlLabel, Modal, Button } from 'react-bootstrap';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};

    //show or hide modal
    this.state.showModal = true;

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  onEmailChange(event){
    this.setState({ email: event.target.value})
  }

  onPasswordChange(event){
    this.setState({password: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log("EMAIL", this.state.email)
    this.props.loginUser({email: this.state.email, password: this.state.password});
    this.setState({ email: '', password: ''});
    this.close();
  }


  close() {
    console.log("INSIDE CLOSE")
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="signup-modal">
      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
          {' '}
          <FormGroup controlId="formEmail">
            <ControlLabel>Email Address</ControlLabel>
            <FormControl name="formEmail" value={this.state.email}
            onChange={this.onEmailChange}
            type="text" placeholder="Enter your email address" />
          </FormGroup>
          {' '}
          <FormGroup controlId="formPw">
            <ControlLabel>Password</ControlLabel>
            <FormControl name="pw" value={this.state.password}
            onChange={this.onPasswordChange}
            type="password" placeholder="Enter your password" />
          </FormGroup>
          {' '}
          </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Cancel</Button>
            <Button bsStyle="primary" onClick={this.onFormSubmit}>Log In</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(LogInForm);
