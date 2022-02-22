import { handleActions, createAction } from "redux-actions";
import { apis } from '../../shared/api'
import produce from "immer";

// initialState
const initialState = {
  chatList: [],
  roomList: [],
  roomInfoList: [],
};

// action
const GET_CHATLIST = "GET_CHATLIST";
const GET_ROOMLIST = "GET_ROOMLIST";
const GET_ROOM_INFO = "GET_ROOM_INFO";
const ADD = "ADD";
const RESET = "RESET";

// action creater
export const getChatList = createAction(GET_CHATLIST, (chatList) => ({
  chatList,
}));
export const getChatRoomList = createAction(GET_ROOMLIST, (roomList) => ({
  roomList,
}));
export const getRoomInfo = createAction(GET_ROOM_INFO, (roomInfo) => ({
  roomInfo,
}));
export const addChat = createAction(ADD, (chatData) => ({ chatData }));
const reset = createAction(RESET, () => ({}));


// 채팅방 만들기
export const makeRoomChatDB =
  (postId) =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.chatRoom(postId);
      response &&
        history.push(
          `/chatroom/${response.data.roomId}/${response.data.roomName}`
        );
    } catch (err) {
      window.alert("이미 나간 채팅방이므로 연락하기가 불가능합니다.");
    }
  };

//채팅목록 정보 가져오기
export const getListChatDB =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.chatRoomList();

      response && dispatch(getChatRoomList(response.data));
    } catch (err) {}
  };

//채팅방 내용 가져오기//
export const getContentChatDB =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.chatMSG(roomId);
      response && dispatch(getChatList(response.data));
    } catch (err) {}
  };


//대화방 삭제
export const chatRoomDeleteDB =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.chatRoomDelete(roomId);
      response && dispatch(getListChatDB());
    } catch (err) {}
  };


// reducer
export default handleActions(
  {
    [GET_CHATLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.chatList = action.payload.chatList;
      }),

    [GET_ROOMLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.roomList = action.payload.roomList;
      }),

    [GET_ROOM_INFO]: (state, action) =>
      produce(state, (draft) => {
        draft.roomInfoList = action.payload.roomInfo;
      }),

    [ADD]: (state, action) =>
      produce(state, (draft) => {
        draft.chatList.unshift(action.payload.chatData);
      }),

    [RESET]: (state, action) =>
      produce(state, (draft) => {
        draft.chatList = [];
      }),
  },
  initialState
);

const chatCreators = {
  addChat,
  getRoomInfo,
  reset,
  makeRoomChatDB,
  getListChatDB,
  getContentChatDB,
  chatRoomDeleteDB,
};

export { chatCreators };