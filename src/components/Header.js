import React, { useState } from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";
import { apisMultipart } from "../shared/api";
import { addPostDB } from "../redux/modules/postReducer";

import { GrSettingsOption } from "react-icons/gr";
import { IoMdPaperPlane } from "react-icons/io";
import { AiFillHome, AiOutlineHeart, AiOutlineCompass } from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import { AiOutlinePicture, AiOutlineClose } from "react-icons/ai";
import { BsPlayBtn, BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { CgSmile, CgProfile } from "react-icons/cg";
import { TiArrowRepeat } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/userReducer";

import Modal from "../components/Modal";

// 헤더에서 바로 게시물 작성 모달창 불러오기
const Header = () => {
  const dispatch = useDispatch();
  const [profileButton, setProfileButton] = useState(false);
  const [postWrite, setPostWrite] = useState(false);
  const [uploadURL, setUploadURL] = useState([]);
  const [content, setContent] = useState("");
  const [uploadFiles, setUploadFiles] = useState();

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const addUploadURL = (e) => {
    setUploadFiles(e.target.files);
    const ImgUrlList = [...uploadURL];
    console.log(ImgUrlList);
    for (let i = 0; i < e.target.files.length; i++) {
      const ImgUrl = URL.createObjectURL(e.target.files[i]);

      ImgUrlList.push(ImgUrl);
    }
    setUploadURL(ImgUrlList);
  };

  const addPost = () => {
    let fd = new FormData();
    fd.append("imageUrl", uploadFiles)
    fd.append("content", content);

    return apisMultipart.addPost(fd).then((res) => {
        const data = res.data;
        alert("등록 성공");
        setPostWrite(false);
        setUploadURL([]);
        setContent("");
        dispatch(addPostDB(data));
    });
};

  const closeUpload = (e) => {
    setUploadURL([]);
    setPostWrite(false);
  };

  return (
    <Wrap>
      <HeadWrap>
        {/* 로고 */}
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
        />
        <LinkPages>
          {/* 홈화면 가는 버튼 */}
          <Link to="/">
            <AiFillHome
              size="28"
              style={{ margin: "0 5px", cursor: "pointer", color: "black" }}
            />
          </Link>
          {/* 디엠 버튼 */}
          <Link to="/direct">
            <IoMdPaperPlane
              size="28"
              style={{ margin: "0 10px", cursor: "pointer", color: "black" }}
            />
          </Link>
          {/* 게시물 추가 버튼 */}
          <BsPlusSquare
            onClick={() => {
              setPostWrite(true);
            }}
            size="28"
            style={{ margin: "0 10px", cursor: "pointer" }}
          />
          {/* 탐험 버튼 */}
          <AiOutlineCompass
            size="28"
            style={{ margin: "0 10px", cursor: "pointer" }}
          />
          {/* 알림 버튼 */}
          <AiOutlineHeart
            size="28"
            style={{ margin: "0 10px", cursor: "pointer" }}
          />
          {/* 프로필 버튼 */}
          {profileButton ? (
            <div position="relative">
              <img
                src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
                alt="profile"
                style={{
                  margin: "2px 10px",
                  width: "26px",
                  borderRadius: "100%",
                  cursor: "pointer",
                  zIndex: "9999",
                }}
                onClick={() => setProfileButton(false)}
              />
              <Triangle></Triangle>
              <SideBarModal>
                <Link to="/mypage" style={{ textDecoration: "none" }}>
                  <SideGoProfile>
                    <CgProfile size="20" color="black" />
                    <SideBarText>프로필</SideBarText>
                  </SideGoProfile>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <SideGoProfile>
                    <RiBookmarkLine size="20" color="black" />
                    <SideBarText>저장됨</SideBarText>
                  </SideGoProfile>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <SideGoProfile>
                    <GrSettingsOption size="20" color="black" />
                    <SideBarText>설정</SideBarText>
                  </SideGoProfile>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <SideGoProfile>
                    <TiArrowRepeat size="20" color="black" />
                    <SideBarText>계정 전환</SideBarText>
                  </SideGoProfile>
                </Link>
                <SideGoProfile
                  onClick={() => {
                    dispatch(userActions.logOutDB());
                  }}
                  style={{ borderTop: "1px solid #ddd", cursor: "pointer" }}
                >
                  <SideBarText style={{ margin: "0" }}>로그아웃</SideBarText>
                </SideGoProfile>
              </SideBarModal>
            </div>
          ) : (
            <div position="relative">
              <img
                src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
                alt="profile"
                style={{
                  margin: "2px 10px",
                  width: "26px",
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
                onClick={() => setProfileButton(true)}
              />
            </div>
          )}
        </LinkPages>
      </HeadWrap>

      {/* 게시물 작성 =>
            1. uploadURL의 개수가 0이면 사진등록 모달 보이게하기
            2. uploadURL의 개수가 0이 아니면 콘텐츠 등록 모달 보이게하기
             */}

      {/* 1번 사진등록 모달 */}
      {uploadURL.length === 0 && (
        <Modal
          visible={postWrite}
          width="500px"
          borderRadius="10px"
          outline="none"
        >
          <PostingTitleArea>
            <PostingTitle>새 게시물 만들기</PostingTitle>
          </PostingTitleArea>

          <PostingImgArea>
            <PostingImg>
              <ImgIconArea>
                <AiOutlinePicture size="100" />
              </ImgIconArea>
              <ImgContent>사진과 동영상을 여기에 끌어다 놓으세요.</ImgContent>
              <Label htmlFor="file">컴퓨터에서 선택</Label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                multiple
                accept="image/*"
                onChange={addUploadURL}
              />
            </PostingImg>
          </PostingImgArea>

          <ClosePosting
            onClick={(e) => {
              closeUpload(e);
            }}
          >
            <AiOutlineClose size="35px" color="#fff" />
          </ClosePosting>
        </Modal>
      )}

      {/* 2번 콘텐츠등록 모달 */}
      {uploadURL.length !== 0 && (
        <Modal
          visible={postWrite}
          width="90%"
          maxWidth="853px"
          borderRadius="10px"
          outline="none"
        >
          <PostingTitleArea>
            <PostingTitle>새 게시물 만들기</PostingTitle>
            <UploadPost onClick={addPost}>공유하기</UploadPost>
          </PostingTitleArea>

          <MainSector>
            {uploadURL.length !== 0 &&
              uploadURL.map((file, index) => {
                return (
                  <>
                    <div
                      style={{
                        width: "100%",
                        height: "480px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={file}
                        alt="userUploadImg"
                        style={{
                          maxWidth: "480px",
                          maxHeight: "480px",
                          display: "block",
                        }}
                      />
                    </div>
                  </>
                );
              })}
            <MainRight>
              <RightTop>
                <UserInfo>
                  <img
                    src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
                    alt="alts"
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "100%",
                      marginRight: "10px",
                    }}
                  />
                  <div style={{ fontSize: "12px", fontWeight: "bold" }}>
                    anonymous
                  </div>
                </UserInfo>
                <Textarea
                  placeholder="문구 입력..."
                  autoComplete="off"
                  autoCorrect="off"
                  onChange={handleContent}
                />
                <TopOfBottom>
                  <CgSmile
                    size="23"
                    style={{
                      margin: "0px 16px",
                      cursor: "pointer",
                    }}
                  />
                  <NumLetter>0/2,200</NumLetter>
                </TopOfBottom>
              </RightTop>
            </MainRight>
          </MainSector>

          <ClosePosting
            onClick={(e) => {
              closeUpload(e);
            }}
          >
            <AiOutlineClose size="35" color="#fff" />
          </ClosePosting>
        </Modal>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
  position: fixed;
  z-index: 3;
`;

const HeadWrap = styled.div`
  max-width: 975px;
  padding: 0 20px;
  display: flex;
  height: 60px;
  background-color: #fff;
  margin: auto;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ddd;
`;

const LinkPages = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  right: 0;
`;

const SideBarModal = styled.div`
  position: absolute;
  background-color: #fff;
  top: 46px;
  right: -10px;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const SideGoProfile = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 35px;
  padding: 10px;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-top: 10px solid none;
  border-bottom: 10px solid #eee;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  position: absolute;
  bottom: -12px;
  left: 14px;
  z-index: 9997;
  background-color: #fff;
`;

const SideBarText = styled.div`
  margin-left: 10px;
  color: black;
`;

const PostingTitleArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid #ccc;
  padding: 18px;
`;

const PostingTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const PostingImgArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 465px;
`;
const PostingImg = styled.div`
  text-align: center;
`;

const ImgIconArea = styled.div`
  position: absolute;
  top: 140px;
  left: 200px;
`;

const ImgContent = styled.div`
  font-size: 22px;
  color: #262626;
  padding-bottom: 30px;
`;

const Label = styled.label`
  width: 88px;
  height: 18px;
  background-color: #0095f6;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
`;

const ClosePosting = styled.div`
  position: fixed;
  top: -48px;
  right: -4px;
  cursor: pointer;
`;

const UploadPost = styled.div`
  position: absolute;
  right: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #0095f6;
`;

const MainSector = styled.div`
  display: flex;
`;
const MainRight = styled.div`
  width: 40%;
`;

const RightTop = styled.div`
  border-bottom: 1px solid #ccc;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Textarea = styled.textarea`
  resize: none;
  display: block;
  width: 300px;
  height: 168px;
  border: none;
  padding: 10px;
  outline: none;
  font-size: 14px;
`;

const TopOfBottom = styled.div`
  height: 36px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

const NumLetter = styled.div`
  padding: 10px;
  font-size: 12px;
  color: #999;
`;

export default Header;
