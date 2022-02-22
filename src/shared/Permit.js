<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const is_token = document.cookie


  if (is_token && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

=======
import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const is_token = document.cookie


  if (is_token && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

>>>>>>> f619728b7deafde5dfd889a130a6b8a7c0f25b3f
export default Permit;