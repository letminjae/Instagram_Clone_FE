import './App.css';
import React from 'react';

import Main from '../pages/Main'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import Direct from '../pages/Direct'
import Mypage from '../pages/Mypage'

import { history } from '../redux/configureStore'
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path='/direct' component={Direct} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/mypage' component={Mypage} />
        <Route path='/' exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;