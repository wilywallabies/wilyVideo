import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import Video from './components/Video';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store/store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/video" component={Video}>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'));
