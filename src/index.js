import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import reduxThunk from 'redux-thunk';


import Start from './components/auth/start';
import Home from './components/home/home';
import Logout from './components/auth/logout';
import reducers from './reducers';

import 'athenaeum/lib/assets/styles.css';
import './style/main.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/logout" component={Logout}/>
          <Route path="/home" component={Home} />
          <Route path="/" component={Start} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
