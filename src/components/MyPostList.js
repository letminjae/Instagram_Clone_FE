import React, { useEffect, useState } from "react";
import { apis } from "../shared/api";
import { actionCreators as mypageActions } from "../redux/modules/mypageReducer";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Text, Button, IconButton, Image } from "../elements";
import Mypost from "./MyPost";
import styled from "styled-components";

const MyPostList = (props) => {
  const dispatch = useDispatch();

  const userinfo = useSelector((state) => state.user.userinfo);

  const userId = props.userId;
  const mypost = useSelector((state) => state.mypage);
  console.log(mypost);
  console.log(mypost.list);
  const count = Object.keys(mypost).length;
  console.log(count);
  const profileEmail = userinfo.email.split("@")[0];
  console.log(profileEmail);
  useEffect(() => {
    if (userinfo.nickname === props.nickname) {
      dispatch(mypageActions.myPostDB(userId));
    }
  }, []);

  const [post_list, setPostList] = useState([]);

  useEffect(() => {
    apis
      .getPost()
      .then(function (response) {
        console.log(response.data);
        setPostList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Grid maxWidth="935px" margin="0 auto" padding="30px 20px 0px 20px">
        <Grid margin="0 0 44px 0" is_flex>
          <Grid width="40%">
            <Image imageType="mypage_profile" size="150" />
          </Grid>
          <Grid>
            <Grid display="flex" alignItems="center" margin="0 0 20px 0">
              <Text size="28px" margin="0 20px 0 0">
                {profileEmail}
              </Text>
              <Button
                height="30px"
                color="#000"
                bg="#fff"
                border
                borderRadius="4px"
                fontSize="14px"
                width="93px"
                fontWeight="bold"
              >
                프로필 편집
              </Button>
            </Grid>
            <Grid display="flex" margin="0 0 20px 0">
              <Text margin="0 30px 0 0">
                게시글 <span>{count}</span>
              </Text>
            </Grid>
            <Grid>
              <Text bold>{userinfo.nickname} </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid borderTop="1px solid #aaa">
          <Grid
            is_flex
            margin="auto"
            cursor="pointer"
            width="80px"
            borderTop=" 1px solid"
          >
            <IconButton
              Table
              margin="5px 8px 0 0"
              color="#000"
              size="15"
            ></IconButton>
            <Span> 게시물</Span>
          </Grid>
        </Grid>
        <Grid
          Width="935px"
          height="100"
          wrap="wrap"
          display="flex"
          justifyContent="flex-start"
        ></Grid>
      </Grid>
      {post_list.map((p, i) => {
        const postId = p.id;
        const userId = p.uid;
        const nickname = p.nickname;
        const imageUrl = p.imageUrl;
        const likeCount = p.likeCount;
        const commentCount = p.commentCount;
        const content = p.content;
        const createdAt = p.createdAt;

        return (
          <React.Fragment>
            <Mypost
              postId={postId}
              userId={userId}
              createdAt={createdAt}
              imageUrl={imageUrl}
              nickname={nickname}
              likeCount={likeCount}
              commentCount={commentCount}
              content={content}
              i={i}
            />
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

const Span = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;

export default MyPostList;
