import axios from "axios";

const tokenCheck = document.cookie;
const token = tokenCheck.split("=")[1];
const api = axios.create({
  // 실제 베이스 유알엘
  baseURL: "http://13.125.107.22:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
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
    headers : {
      "content-type": "multipart/form-data",
      token : token,
    },
  });
  
  apiMultipart.interceptors.request.use(function (config) {
    const accessToken = document.cookie.split("=")[1];
    config.headers.common["authorization"] = `${accessToken}`;
    return config;
  });



export const apis = {
  login: (email, pwd) =>
    api.post("user/login", { email: email, password: pwd }),
  signup: (email, nickname, pwd) =>
    api.post("user/signup", {
      email: email,
      nickname: nickname,
      password: pwd,
    }),
  //   userInfo: (token) =>
  //     api.post(`/user/userinfo`, {
  //       authorization: token,
  //     }),

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
};

export const apisMultipart = {
  addPost: (formdata) => apiMultipart.post("/api/post", { formdata })
};