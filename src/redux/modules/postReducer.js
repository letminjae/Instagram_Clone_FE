import { handleActions, createAction } from 'redux-actions';
import produce from 'immer'

//액션
const SET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const DEL_POST = 'DEL_POST';


//initialState
const initialState = {
    list: [],
    likedPostList: [],
}


//액션생성함수
const setPost = createAction(SET_POST, (postList, liked) => ({
    postList,
    liked,
}));
const addPost = createAction(ADD_POST, (postData) => ({
    postData,
}))
const delPost = createAction(DEL_POST, (postId) => ({
    postId,
}))


//미들웨어
const setPostDB = () => {
    return function (dispatch, getState, { history }) {
        // apis.getPost()
        //     .then((response) => {
        //         console.log(response)
        //     })
        //     .error((error) => console.log(error))
    }
}

const addPostDB = (data) => {
    return function (dispatch, getState, { history }) {


    }
}

const delPostDB = (postId) => {
    return function (dispatch, getState, { history }) {

    }
}



//리듀서
export default handleActions({
    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.postlist)
        draft.likedPostList.push(...action.payload.liked)
    }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    }),
    [DEL_POST]: (state, action) => produce(state, (draft) => {
        draft.list.filter((list) => list.id !== action.payload.postId)
    }),

}, initialState);


//export
const actionCreators = {
    setPost,
    addPost,
    delPost,
    setPostDB,
    addPostDB,
    delPostDB,
}

export { actionCreators }