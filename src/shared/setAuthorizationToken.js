import axios from "axios";

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = `${token}`;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};
