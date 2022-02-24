import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
// actions
const MY_POST = "MY_POST";
const GET_POST = "GET_POST";
const SET_POST = "SET_POST";

//action creators

const setPost = createAction(MY_POST, (mypost) => ({ mypost }));
const myPost = createAction(MY_POST, (user) => ({ user }));
const getPsot = createAction(GET_POST, (user) => ({ user }));

//initialState
const initialState = {
  list: [],
};

// middleware actions
const myPostDB = (userId) => {
  return function (dispatch, getState, { history }) {
    apis.getMyPost(userId).then((res) => {
      console.log(res.data);
      const myPostList = res.data;
      myPostList.map((mypost, i) => {
        console.log(mypost);
        dispatch(setPost(mypost));
      });
    });
  };
};

const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    apis.getPost().then(function (res) {
      console.log(res);
      const _postList = res.data;
      console.log(_postList);
      _postList.map((post, i) => {
        console.log(post);
        console.log(post.uid);
      });
    });

    // dispatch(setPost(data.data))
  };
};

// reducer
// draft = state의 복제품 (불변성 유지)
export default handleActions(
  {
    [MY_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.mypost);
        draft.list = { ...action.payload.mypost };
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(state);
        console.log(action);
        draft.list = { ...action.payload.mypost };
      }),
  },
  initialState
);

// action creator export

const actionCreators = {
  myPost,
  getPsot,
  setPost,
  myPostDB,
  getPostDB,
};

export { actionCreators };
