import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import Start from './components/auth/start';
import Home from './components/home/home';
import Logout from './components/auth/logout';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import {AUTH_USER} from './constants/globals';

import 'athenaeum/lib/assets/styles.css';
import './style/main.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/logout" component={Logout}/>
          <Route path="/home" component={RequireAuth(Home)} />
          <Route path="/" component={Start} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
