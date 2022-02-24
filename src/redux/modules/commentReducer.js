import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";

//actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DEL_COMMENT = "DEL_COMMENT";

//action creators
const setComment = createAction(SET_COMMENT, (commentList) => ({
  commentList,
}));
const addComment = createAction(ADD_COMMENT, (comment) => ({
  comment,
}));
const deleteComment = createAction(DEL_COMMENT, (commentId) => ({ commentId }));

// initialState
const initialState = {
  list: [],
};

//middleware actions
const getCommentDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getComments()
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const rescomment = res.data;
        rescomment.map((comment, i) => {
          // console.log(comment);
          // console.log(comment.commentUserDto);
          const commentUserDto = comment.commentUserDto;
          dispatch(setComment(commentUserDto));
          // commentUserDto.map((ct, i) => {
          //   console.log(ct.content);
          //   dispatch(setComment(ct.content));
          // });
        });
      })

      .catch((error) => console.log(error));
  };
};

const addCommentDB = (postId, content) => {
  console.log({ postId, content });
  const comment = {
    postId: postId,
    comment: content,
  };
  console.log(comment);
  return function (dispatch, getState, { history }) {
    apis
      .addComment(postId, content)
      .then((res) => {
        console.log(res);
        dispatch(addComment(comment));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const deleteCommentDB = (meetingId, commentId) => {
  return function (dispatch, getState, { history }) {
    apis.delComment(commentId).then((res) => {
      dispatch(deleteComment(commentId));
      alert("댓글이 삭제되었습니다.");
      history.push("/");
    });
  };
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(state);
        console.log(action);
        draft.list = [...action.payload.commentList];
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // console.log(state);
        // console.log(action);
        // console.log(draft.list);
        draft.list.unshift(action.payload.comment);
      }),

    [DEL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.meetingId].filter(
          (p, i) => p.id !== action.payload.meetingId
        );
      }),
  },
  initialState
);

const actionCreators = {
  setComment,
  addComment,
  deleteComment,
  getCommentDB,
  addCommentDB,
  deleteCommentDB,
};

export { actionCreators };
