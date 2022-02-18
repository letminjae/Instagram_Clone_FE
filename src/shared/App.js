import './App.css';
import React from 'react';
import { history } from '../redux/configureStore'
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import Signin from '../pages/Signin'
import Signup from '../pages/Signup';
import Mypage from '../pages/Mypage';
import Direct from '../pages/Direct';
import Main from '../pages/Main'

import Header from '../components/Header'

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/direct" component={Direct} />
        <Route path='/' exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
