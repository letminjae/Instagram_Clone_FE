import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {} from "react-icons";
import { Grid, Text, Button, IconButton, Input, Image } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/userReducer";

const Signin = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  //상태관리
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (email === "") {
      alert("이메일를 입력해주세요.");
      return;
    }
    if (pwd === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    dispatch(userActions.loginDB(email, pwd));
  };

  return (
    <React.Fragment>
      <Grid position="relative" top="100px">
        <Grid
          padding="10px 0"
          maxWidth="350px"
          border="1px solid #e4e4e4"
          margin="0px auto 0px auto"
          bg="#fff"
        >
          <Image
            imageType="logo"
            width="175px"
            height="70px"
            bgsize="cover"
            margin="20px auto"
            src="https://pngimage.net/wp-content/uploads/2018/06/instagram-font-png-1.png"
          />
          <Grid maxWidth="268px" margin=" 0 auto">
            <Input
              _onChange={(e) => {
                setEmail(e.target.value);
              }}
              onSubmit={() => {}}
              placeholder="이메일"
              padding="9px 0 7px 8px"
              margin="3px  auto"
              bg="#FAFAFA"
              border="1px solid #e4e4e4"
              borderRadius="3px"
            ></Input>
            <Input
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
              onSubmit={() => {}}
              placeholder="비밀번호"
              padding="9px 0 7px 8px"
              margin="3px auto"
              bg="#FAFAFA"
              border="1px solid #e4e4e4"
              borderRadius="3px"
            ></Input>
            <Button
              _onClick={login}
              padding="5px 0px"
              margin="10px auto 5px auto"
              borderRadius="5px"
            >
              로그인
            </Button>
            <Grid is_flex margin="10px auto 18px">
              <Line />
              <Text size="13px" margin="0 18px" color="#8e8e8e" bold>
                또는
              </Text>
              <Line />
            </Grid>
            <Grid
              is_flex
              margin="30px auto 20px auto"
              cursor="pointer"
              maxWidth="180px"
            >
              <IconButton
                facebookLogo
                margin="0 8px 0 0"
                color="#3B5998"
              ></IconButton>
              <Span> Facebook으로 로그인</Span>
            </Grid>
            <Grid>
              <Atag>비밀번호를 잊으셨나요?</Atag>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          padding="10px 0"
          maxWidth="350px"
          border="1px solid #e4e4e4"
          margin="10px auto"
          bg="#fff"
        >
          <Grid is_flex>
            <Text margin="15px 0 15px auto" size="14px">
              계정이 없으신가요?
            </Text>
            <Text
              margin="15px auto 15px 5px"
              size="14px"
              color="#0095f6"
              cursor="pointer"
              bold
              _onClick={() => {
                history.push("/signup");
              }}
            >
              가입하기
            </Text>
          </Grid>
        </Grid>{" "}
        <Grid width="350px" margin="0px auto">
          <Text margin="20px auto 10px auto" textalign="center" size="14px">
            앱을 다운로드하세요.
          </Text>
        </Grid>
        <Grid is_flex width="350px" margin="0px auto 45px auto">
          <Image
            cursor="pointer"
            _onClick={() => {
              window.open(
                "https://apps.apple.com/app/instagram/id389801252?vt=lo",
                "_blank"
              );
            }}
            imageType="logo"
            width="136px"
            height="40px"
            bgsize="cover"
            margin="10px 4px 20px auto"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
          ></Image>
          <Image
            cursor="pointer"
            _onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=B9E69747-84D6-4E2F-9807-E91F7C5FB1F0&utm_content=lo&utm_medium=badge",
                "_blank"
              );
            }}
            imageType="logo"
            width="136px"
            height="40px"
            bgsize="cover"
            margin="10px auto 20px 4px"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
          ></Image>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Line = styled.div`
  border-bottom: 1px solid #dbdbdb;
  width: 103px;
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 auto 0 0;
  font-size: 14px;
  color: #385185;
  font-weight: bold;
`;

const Atag = styled.a`
  margin: 20px auto 10px auto;
  font-size: 12px;
  display: block;
  text-align: center;
`;

export default Signin;
