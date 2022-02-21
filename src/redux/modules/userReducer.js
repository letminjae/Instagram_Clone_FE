import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import axios from "axios";
import { apis } from "../../shared/api";
import { setAuthorizationToken } from "../../shared/setAuthorizationToken";
// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
// const USERINFO = "USERINFO";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
// const userInfo = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(email, pwd)
      .then((res) => {
        setCookie("token", res.data.token, 5);
        dispatch(setUser({ email: email }));
        history.push("/main");
      })
      .catch((error) => console.log(error));
  };
};

const loginCheckDB = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    // const userId = localStorage.getItem("authorization");
    // const tokenCheck = document.cookie;
    // if (tokenCheck) {
    //   dispatch(setUser({ id: userId }));
    // } else {
    //   dispatch(logOut());
    // }
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token");
    // localStorage.removeItem("authorization");
    dispatch(logOut({ userinfo: { email: "", nickname: "" }, token: null }));
    history.replace("/");
    history.go(0);
  };
};

const SignUpDB = (email, nickname, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(email, nickname, pwd)
      .then((res) => {
        alert("회원가입이 완료되었습니다.");
        history.push("/signin");
      })
      .catch((error) => {
        alert("회원가입에 실패했습니다.");
      });
  };
};

const userInfoDB = (token) => {
  return function (dispatch, getState, { history }) {
    apis
      .userInfo(token)
      .then((res) => {})
      .catch((error) => console.log(error));
  };
};

// reducer
// draft = state의 복제품 (불변성 유지)
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
        draft.userinfo = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie("is_login");
        draft.userinfo = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    // [USERINFO]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.user = action.payload.user;
    //     draft.username = action.payload.username;
    //   }),
  },
  initialState
);

// action creator export

const actionCreators = {
  logOut,
  getUser,
  loginDB,
  SignUpDB,
  loginCheckDB,
  userInfoDB,
  logOutDB,
};

export { actionCreators };
