import React from "react";
import Header from '../components/Header'
import Story from "../components/Story";
import Recommand from "../components/Recommand";
import PostList from "../components/PostList";
import Post from "../components/Post";

import { setPostDB } from "../redux/modules/postReducer";
import { useDispatch } from "react-redux";

import styled from "styled-components";

const Main = () => {
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if (document.cookie) {
  //     // dispatch(loginActions.loginCheckDB());
  //     dispatch(setPostDB())
  //   }
  // }, []);

  return (
    <React.Fragment>
      <Header />
        <Wrap>
          <Story />
          <PostList />
          <Recommand />
        </Wrap>
    </React.Fragment>
  )
}

const Wrap = styled.div`
  margin: auto;
  width: 975px;
  height: 1000px;
  position: relative;
  top: 80px;

  @media screen and (max-width: 920px) {
    width: 80%;
  }
`;

export default Main