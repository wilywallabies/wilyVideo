import React from 'react';
import CurrentUserInfoContainer from '../containers/currentUserInfoContainer';
import {  Col, Row, Grid } from 'react-bootstrap';

class  CurrentUser extends React.Component {
  render(){
    return (
      <Col xs={6} md={4}>
       <CurrentUserInfoContainer />
    </Col>)
  }
}
export default CurrentUser;
