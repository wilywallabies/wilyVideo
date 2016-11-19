import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import Video from './components/Video';

import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store/store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Route>
      <Route path="/video" component={Video}>
      </Route>
      <Route path="/profile" component={Profile}>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'));
