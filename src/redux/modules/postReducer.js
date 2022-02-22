import { handleActions, createAction } from 'redux-actions';
import produce from 'immer'
import { apis } from '../../shared/api';

//액션
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const DEL_POST = 'DEL_POST';


//initialState
const initialState = {
    list: [],
    likeList: [],
}


//액션생성함수
const setPost = createAction(SET_POST, (postList, liked) => ({ postList, liked }));
const addPost = createAction(ADD_POST, (postData) => ({ postData }))
const delPost = createAction(DEL_POST, (postId) => ({ postId }))


//미들웨어
export const setPostDB = () => {
    return function (dispatch, getState, { history }) {
        apis.getPost()
            .then(function (response){
                const _postList = response.data
                _postList.map((post,i) => {
                    console.log(post)
                    dispatch((setPost(post)))
                })
            })
        
        // dispatch(setPost(data.data))
    }
}

export const addPostDB = (data) => {
    return function (dispatch, getState, { history }) {
        dispatch(addPost(data));
        dispatch(setPostDB());
    }
}

export const delPostDB = (postId) => {
    return function (dispatch, getState, { history }) {
        apis.deletePost(postId)
            .then((response) => {
                dispatch(delPost(postId));
            })
    }
}



//리듀서
export default handleActions({
    [SET_POST]: (state, action) => {
        return {
            ...state,
            list: action.payload.postList,
            likeList: action.payload.liked,
        }
    },
    [ADD_POST]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    }),
    [DEL_POST]: (state, action) => produce(state, (draft) => {
        draft.list.filter((list) => list.id !== action.payload.postId)
    }),

}, initialState);