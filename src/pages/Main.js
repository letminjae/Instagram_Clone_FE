import React from "react";
import Header from '../components/Header'
import Story from "../components/Story";
import Recommand from "../components/Recommand";
import Post from '../components/Post'

import styled from "styled-components";

const Main = () => {

    return (
        <React.Fragment>
            <Header />
                <Wrap>
                    <Story />
                    <Post />
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