import React from "react";
import Header from '../components/Header'
import Story from "../components/Story";
import Recommand from "../components/Recommand";
import PostList from "../components/PostList";
import Post from "../components/Post";

import { setPostDB } from "../redux/modules/postReducer";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import Signin from './Signin'

const Main = () => {
  const token = document.cookie;

  return (
    <React.Fragment>

      {(token && (
        <>
        <Header />
        <Wrap>
          <Story />
          <PostList />
          <Recommand />
        </Wrap>
        </>
      )) || <Signin />}
      
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