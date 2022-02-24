import React from "react";
import Header from "../components/Header";
import Story from "../components/Story";
import Recommand from "../components/Recommand";
import MyPost from "../components/MyPost";

import styled from "styled-components";
import MyPostList from "../components/MyPostList";

const Mypage = () => {
  return (
    <React.Fragment>
      <Header />
      <Wrap>
        <MyPostList />
      </Wrap>
    </React.Fragment>
  );
};
const Wrap = styled.div`
  padding-top: 100px;

  @media screen and (max-width: 920px) {
    width: 80%;
  }
`;

export default Mypage;
