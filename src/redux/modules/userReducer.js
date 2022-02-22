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
const USERINFO = "USERINFO";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const userInfo = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  data: { email: "", nickname: "" },
  is_login: false,
};

// middleware actions
const loginDB = (email, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(email, pwd)
      .then((res) => {
        setCookie("token", res.data.token, 1);
        const token = res.data.token;
        console.log(res);
        console.log(res.data);
        console.log(res.data.token);
        console.log(token);
        apis
          .userInfo(token)
          .then((res) => {
            console.log(res.data);
            console.log(res.data.data);
            console.log(res.data.token);
            console.log(res.data.data.email);
            console.log(res.data.data.nickname);
            console.log(token);
            dispatch(
              setUser({
                email: res.data.data.email,
                nickname: res.data.data.nickname,
                token: token,
              })
            );
          })
          .catch((error) => console.log(error));
        history.push("/");
        // dispatch(userInfo(res.headers["authorization"], id, pwd));
      })
      .catch((error) => alert("회원정보가 일치하지 않습니다."));
  };
};

const loginCheckDB = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);
    dispatch(setUser(user));
    history.psuh("/");
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
    history.replace("/signin");
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
        console.log(action);
        console.log(state);
        console.log(draft);
        // setCookie("is_login", "success");
        draft.token = action.payload.user.token;
        draft.userinfo = {
          email: action.payload.user.email,
          nickname: action.payload.user.nickname,
        };
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
