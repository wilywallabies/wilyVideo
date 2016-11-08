// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import actions below
// import {} from '../actions/accountActions.js';
import Main from './Main';

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
