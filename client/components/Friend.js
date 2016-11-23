import React from 'react';
import FriendAdd from '../containers/friendsAddContainer';
import FriendDetail from '../containers/friendListContainer';
import {  Col, Row, Grid } from 'react-bootstrap';

class Friend extends React.Component {

  render(){

    return (
      <div >

        <Col  xs={6} md={4} className="panel panel-defaults" className="friendList">
           <Row className="main-container">

          </Row>
          <FriendDetail />
        </Col>

          <FriendAdd />

      </div>

      )
  }
}

export default Friend