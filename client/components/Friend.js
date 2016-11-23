import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';
import {  Col, Row, Grid } from 'react-bootstrap';

class Friend extends React.Component {

  render(){
    return (
      <Grid>
          <Col className="friendList">
            <FriendAdd />
            <FriendDetail />
          </ Col >
      </ Grid>
      )
  }
}

export default Friend