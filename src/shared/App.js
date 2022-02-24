<<<<<<< HEAD
import "./App.css";
import React from "react";

import Main from "../pages/Main";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Direct from "../pages/Direct";
import Mypage from "../pages/Mypage";
// import Permit from "./Permit";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/userReducer";
import { history } from "../redux/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { setPostDB } from "../redux/modules/postReducer";

function App() {
  // const dispatch = useDispatch();
  // const userinfo = useSelector((state) => state.user.is_login);
  // const is_login = useSelector((state) => state.user.is_login);
  // const is_token = document.cookie;
  // console.log(is_token);
  // console.log(is_login);
  // console.log(userinfo);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (document.cookie) {
      dispatch(userActions.loginCheckDB());
    }
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
=======
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
import { setPostDB } from "../redux/modules/postReducer";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (document.cookie) {
      // dispatch(loginActions.loginCheckDB());
      dispatch(setPostDB())
    }
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
>>>>>>> 125695e142038a3d344877048173aa92e85df29a
