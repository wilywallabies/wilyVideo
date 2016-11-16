import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/accountActions';
import { Form, FormGroup, FormControl, ControlLabel, Modal, Button } from 'react-bootstrap';

class SignupForm extends React.Component {
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

  componentWillMount(){
    console.log("in mount");
  }

  onEmailChange(event){
    this.setState({ email: event.target.value})
  }

  onPasswordChange(event){
    this.setState({ password: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    console.log("EMAIL", this.state.email)
    this.props.signUpUser({email: this.state.email, password: this.state.password});
    this.setState({ email: '', password: ''});
    this.close();
  }


  close() {
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
            <Modal.Title>Sign Up</Modal.Title>
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
            <Button bsStyle="primary" onClick={this.onFormSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUpUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignupForm);
