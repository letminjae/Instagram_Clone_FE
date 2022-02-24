import axios from "axios";

const tokencheck = document.cookie;
const token = tokencheck.split("=")[1];
const api = axios.create({
  // 실제 베이스 유알엘
  baseURL: "http://13.125.107.22:8080",

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // accept: "application/json,",
    token: token,
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["authorization"] = `${accessToken}`;
  return config;
});

const apiMultipart = axios.create({
  baseURL: "http://13.125.107.22:8080",
  headers: {
    "content-type": "multipart/form-data",
    token: token,
  },
});

apiMultipart.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["authorization"] = `${accessToken}`;
  return config;
});

export const apis = {
  login: (email, pwd) =>
    api.post("/user/login", { email: email, password: pwd }),
  signup: (email, nickname, pwd) =>
    api.post("/user/signup", {
      email: email,
      nickname: nickname,
      password: pwd,
    }),
  userInfo: (token) =>
    api.get(`/user/info`, {
      token: token,
    }),
  //포스트 로드, 삭제
  getPost: () => api.get("api/post"),
  deletePost: (postId) => api.delete(`api/post/${postId}`, {}),

  //좋아요 바꾸기
  changeLike: (postId) => api.post(`api/like/${postId}`, { postId }),
  // deleteLike: (postId) => api.delete("api/like", {postId}),

  //DM 채팅
  chatRoom: (postId) => api.post(`/chat/room/${postId}`, {}),

  chatRoomList: () => api.get(`/chat/rooms`, {}),

  chatMSG: (roomId) => api.get(`/chat/message/${roomId}`),

  chatShowProfile: (roomId) => api.get(`/user/introduction/${roomId}`),

  chatRoomInfo: (roomId) => api.get(`/chat/room/${roomId}/carpool`),

  chatRoomDelete: (roomId) => api.delete(`/chat/room/${roomId}`),

  //유저 정보 불러오기
  getUser: () => api.get("/api/users"),

  //댓글
  getComment: (postId) => api.get(`/api/comment/${postId}`, {}),

  addComment: (postId, content) =>
    api.post(`/api/comment/${postId}`, { content }),

  deleteComment: (commentId) => api.delete(`/api/comment/${commentId}`, {}),

  //마이페이지 게시글 조회
  getMyPost: (userId) => api.get(`/user/mypage/${userId}`, { userId: userId }),

  //채팅
  //채팅방 생성(유저아이디를 누르면 됨)
  chatRoom: (userId) => api.post(`api/chat/room/${userId}`, {}),

  //내가 참여한 전체 채팅방 조회
  chatRoomList: () => api.get(`api/chat/rooms`, {}),

  //특정 방에서 쓴 메시지 내용 가져오기
  chatMSG: (roomId) => api.get(`api/chat/message/${roomId}`),

  //특정 한 채팅방 정보조회
  chatOneRoom: (roomId) => api.get(`api/chat/room/${roomId}`),

  //채팅방 나가기
  chatRoomDelete: (roomId) => api.delete(`api/chat/room/${roomId}`),
};

export const apisMultipart = {
  addPost: (formdata) => apiMultipart.post("/api/post", formdata),
};
