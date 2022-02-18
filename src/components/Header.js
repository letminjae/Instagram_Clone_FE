import React, { useState } from "react";
import styled from "styled-components";
import Grid from '../elements/Grid'

import { history } from "../redux/configureStore";
import { Link } from "react-router-dom";

import { GrSettingsOption } from "react-icons/gr";
import { IoMdPaperPlane } from "react-icons/io";
import {
    AiFillHome,
    AiOutlineHeart,
    AiOutlineCompass,
} from "react-icons/ai";
import { RiBookmarkLine } from "react-icons/ri";
import { AiOutlinePicture, AiOutlineClose } from "react-icons/ai";
import { BsPlayBtn, BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { CgSmile, CgProfile } from "react-icons/cg";
import { TiArrowRepeat } from "react-icons/ti";


// 헤더에서 바로 게시물 작성 모달창 불러오기
const Header = () => {
    const [profileButton, setProfileButton] = useState(false);



    return (
        <Wrap>
            <HeadWrap>
                {/* 로고 */}
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
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
                    <Link to='/direct'>
                        <IoMdPaperPlane
                            size="28"
                            style={{ margin: "0 10px", cursor: "pointer", color: "black" }}
                        />
                    </Link>
                    {/* 게시물 추가 버튼 */}
                    <BsPlusSquare
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
                        <Grid position="relative">
                            <img
                                src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
                                alt="profile"
                                style={{
                                    margin: "2px 10px",
                                    width: "26px",
                                    borderRadius: "100%",
                                    cursor: "pointer",
                                    zIndex: "10",
                                }}
                                onClick={() => setProfileButton(false)}
                            />
                            <Triangle></Triangle>
                            <SideBarModal>
                                <Link to="/mypage" style={{ textDecoration: 'none' }}>
                                    <SideGoProfile>
                                        <CgProfile size="20" color="black"/>
                                        <SideBarText>프로필</SideBarText>
                                    </SideGoProfile>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <SideGoProfile>
                                        <RiBookmarkLine size="20" color="black"/>
                                        <SideBarText>저장됨</SideBarText>
                                    </SideGoProfile>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <SideGoProfile>
                                        <GrSettingsOption size="20" color="black"/>
                                        <SideBarText>설정</SideBarText>
                                    </SideGoProfile>
                                </Link>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <SideGoProfile>
                                        <TiArrowRepeat size="20" color="black"/>
                                        <SideBarText>계정 전환</SideBarText>
                                    </SideGoProfile>
                                </Link>
                                <SideGoProfile
                                    style={{ borderTop: "1px solid #ddd", cursor: "pointer" }}
                                    onClick={null}
                                >
                                    <SideBarText style={{ margin: "0" }}>로그아웃</SideBarText>
                                </SideGoProfile>
                            </SideBarModal>
                        </Grid>
                    ) : (
                        <Grid position="relative">
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
                        </Grid>





                    )}

                </LinkPages>
            </HeadWrap>
        </Wrap>
    )
}

const Wrap = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 auto;
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;
  position: fixed;
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
`

const LinkPages = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 0;
`

const SideBarModal = styled.div`
  position: absolute;
  background-color: #fff;
  top: 46px;
  right: -10px;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  z-index: 9998;
`

const SideGoProfile = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  height: 35px;
  padding: 10px;
  &:hover {
    background-color: #f7f7f7;
  }
`

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
`

const SideBarText = styled.div`
  margin-left: 10px;
  color : black;
`


export default Header;