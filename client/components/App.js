import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import actions below
// import {} from '../actions/accountActions.js';

import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
  constructor(){
    super();
  }

  componentWillReceiveProps(props) {
    console.log('MAIN received props', props);
    if(props.authenticated[0]){
      browserHistory.push('/video')
    }
  }

  render(){
    return (
      <Row id="header">
        <Header />
        <Footer />

      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.isAuthorized
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;



