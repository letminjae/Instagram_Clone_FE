import "./App.css";
import React from "react";

import Main from "../pages/Main";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Direct from "../pages/Direct";
import Mypage from "../pages/Mypage";
import Permit from "./Permit";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as loginActions } from "../redux/modules/userReducer";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (document.cookie) dispatch(loginActions.loginCheckDB());
  }, []);
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/direct" component={Direct} />
        <Route path="/" exact component={Main} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
