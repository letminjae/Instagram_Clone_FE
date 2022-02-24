import React, { useEffect } from "react";
import {
  actionCreators,
  actionCreators as loginActions,
} from "../redux/modules/userReducer";
import { actionCreators as mypageActions } from "../redux/modules/mypageReducer";

import { Grid, Text, Button, IconButton, Image } from "../elements";

import { useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { apis } from "../shared/api";
const MyPost = (props) => {
  const dispatch = useDispatch();
  const [post_list, setPostList] = React.useState([]);
  const user = useSelector((state) => state.user);
  const userinfo = useSelector((state) => state.user.userinfo);

  const userId = props.userId;
  const mypost = useSelector((state) => state.mypage);
  console.log(mypost);
  console.log(mypost.list);
  console.log(mypost.list.imageUrl);
  console.log(userinfo.nickname === props.nickname);
  useEffect(() => {
    if (userinfo.nickname === props.nickname) {
      dispatch(mypageActions.myPostDB(userId));
    }
  }, []);

  return (
    <React.Fragment>
      {userinfo.nickname === props.nickname ? (
        <Grid maxWidth="935px" margin="0 auto" padding="30px 20px 0px 20px">
          <Grid
            Width="935px"
            height="100"
            wrap="wrap"
            display="flex"
            justifyContent="flex-start"
          >
            <Grid maxWidth="284px" maxHeight="284px" margin="5px 7px">
              <Image imageType="rectangle" src={mypost.list.imageUrl} />
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </React.Fragment>
  );
};

const Span = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #000;
  font-weight: bold;
`;
export default MyPost;
