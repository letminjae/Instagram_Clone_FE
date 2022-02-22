import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/api";

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
export const addLikeDB = (postId) => {
  apis.changeLike(postId)
      .then((response) => {
        console.log(response);
      });
};

// const delLikeDB = (postId) => {
//   apis.deleteLike(postId)
//       .then((response => {
//         console.log(response)
//       }));
// };

//리듀서
export default handleActions({
      [ADD_LIKE]: (state, action) => {
        return {
          ...state,
          list: action.payload.like,
        };
      },
      // [DEL_LIKE]: (state, action) => {
      //   return {
      //     ...state,
      //     list: action.payload.like,
      //   };
      // },
}, initialState);