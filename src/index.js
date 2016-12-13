import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

// import App from './App';
import './index.scss';

import {
  App,
  About,
  News,
  Shows,
  Music,
  Photos,
  Videos
} from './containers';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configure-store';

const store = configureStore();

const component = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/news" component={News}/>
      <Route path="/shows" component={Shows}/>
      <Route path="/music" component={Music}/>
      <Route path="/photos" component={Photos}/>
      <Route path="/videos" component={Videos}/>
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {component}
  </Provider>,
  document.getElementById('root')
);
