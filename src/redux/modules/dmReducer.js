import { handleActions, createAction } from "redux-actions";
import { apis } from "../../shared/api";
import produce from "immer";

// initialState
const initialState = {
  chatList: [],
  roomList: [],
  profileList: [],
  phoneInfoList: [],
  roomInfoList: [],
  alarm: [],
};

// action
const GET_CHATLIST = "chat/GET_CHATLIST";
const GET_ROOMLIST = "chat/GET_ROOMLIST";
const GET_ROOM_INFO = "chat/GET_ROOM_INFO";
const ADD = "chat/ADD";
const RESET = "chat/RESET";

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

// thunk
// // 채팅방 만들기(+로 모달 추가해야되는데 안만듬)
// export const makeRoomChatDB =
//   (postId) =>
//   async (dispatch, getState, { history }) => {
//     try {
//       const response = await apis.chatRoom(postId);
//       response &&
//         history.push(
//           `/chatroom/${response.data.roomId}/${response.data.roomName}`
//         );
//     } catch (err) {
//       window.alert("이미 나간 채팅방이므로 연락하기가 불가능합니다.");
//     }
//   };

//채팅목록 정보 가져오기(이게 왼쪽에 있는 리스트 정보 가져오는거임)
export const getListChatDB =
  () =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.chatRoomList();

      response && dispatch(getChatRoomList(response.data));
    } catch (err) {}
  };

//채팅방 내용 가져오기
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

//카풀정보 가져오기
export const getRoomInfoDB =
  (roomId) =>
  async (dispatch, getState, { history }) => {
    try {
      const response = await apis.chatRoomInfo(roomId);

      response && dispatch(getRoomInfo(response.data));
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
  getListChatDB,
  getContentChatDB,
  getRoomInfoDB,
  chatRoomDeleteDB,
};

export { chatCreators };