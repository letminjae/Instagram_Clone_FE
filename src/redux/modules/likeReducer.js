import { handleActions, createAction } from "redux-actions";
import produce from "immer";

//액션
const ADD_LIKE = 'ADD_LIKE';
const DEL_LIKE = 'DEL_LIKE';


//액션생성함수
const addLike = createAction(ADD_LIKE, (like) => ({ like }))
const delLike = createAction(DEL_LIKE, (like) => ({ like }))

//initialState
const initialState = {
    list: [],
};

//미들웨어
const addLikeDB = (postId) => {

}

const delLikeDB = (postId) => {

}

//리듀서
export default handleActions({
      [ADD_LIKE]: (state, action) => {
        return {
          ...state,
          list: action.payload.like,
        };
      },
      [DEL_LIKE]: (state, action) => {
        return {
          ...state,
          list: action.payload.like,
        };
      },
}, initialState);

//export

const actionCreators = {
    addLike,
    delLike,
    addLikeDB,
    delLikeDB,
}

export { actionCreators }