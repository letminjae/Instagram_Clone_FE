import React from "react";
import styled from "styled-components";

import Header from "../components/Header";

import { FiEdit } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi"


const Direct = () => {

    return (
        <React.Fragment>

            {/* 헤더 */}
            <Header />
            <Wrap>

                {/* 디엠창 */}
                <Messages>
                    <MessageContainer>
                        <SideMenu>
                            {/* 사이드 작성칸 */}
                            <Mine>
                                <select name="" id="">
                                    <option value="" >닉네임</option>
                                </select>
                                <FiEdit
                                    style={{ fontSize: '24px', cursor: 'pointer', margin: '16px 0px 0px 10px' }}
                                />
                            </Mine>
                            {/* 사이드 유저 정보 */}
                            <SendUser>
                                <SendUserProfile>
                                    <OtherImage
                                        src="https://pbs.twimg.com/profile_images/799445590614495232/ii6eBROd_400x400.jpg"
                                        alt="박보검" />
                                    <Name>
                                        <NickName>박재균</NickName>
                                    </Name>
                                </SendUserProfile>

                                <SendUserProfile>
                                    <OtherImage
                                        src="https://pbs.twimg.com/profile_images/799445590614495232/ii6eBROd_400x400.jpg"
                                        alt="박보검" />
                                    <Name>
                                        <NickName>박재균</NickName>
                                    </Name>
                                </SendUserProfile>

                                <SendUserProfile>
                                    <OtherImage
                                        src="https://pbs.twimg.com/profile_images/799445590614495232/ii6eBROd_400x400.jpg"
                                        alt="박보검" />
                                    <Name>
                                        <NickName>박재균</NickName>
                                    </Name>
                                </SendUserProfile>

                            </SendUser>
                        </SideMenu>

                        {/* DM 보내는 창 */}
                        <SendMessageBoxs>
                            <SendMessageContainer>

                                {/* DM 보낼 유저 이름 */}
                                <UserInfoContainer>
                                    <OtherImage
                                        src="https://pbs.twimg.com/profile_images/799445590614495232/ii6eBROd_400x400.jpg"
                                        alt="박보검" />
                                    <Name>
                                        <NickName style={{margin : "0px 440px 10px 0px", }}>박재균</NickName>
                                    </Name>
                                    <HiOutlineInformationCircle style={{fontSize : "28px"}}/>
                                </UserInfoContainer>

                                {/* DM 내용 */}
                                <ScrollContainer onScroll={null}>
                                    {/* {messageData?.map((item, index) => {
                                        const { created_at, message } = item;
                                        return (
                                            <>
                                                <ContentsContainer key={index}>
                                                    <MessageList>
                                                        {item.user_account === user_account ? (
                                                            <PostUserContainer>
                                                                <p>{TimeFormat(created_at)}</p>
                                                                <PostUser need={message.length > 20}>
                                                                    <Span>{message}</Span>
                                                                </PostUser>
                                                            </PostUserContainer>
                                                        ) : (
                                                            <SendUserContainer>
                                                                <SendDMUser need={message.length > 20}>
                                                                    <Span>{message}</Span>
                                                                </SendDMUser>
                                                                <p>{TimeFormat(created_at)}</p>
                                                            </SendUserContainer>
                                                        )}
                                                    </MessageList>
                                                </ContentsContainer>
                                            </>
                                        );
                                    })}
                                    <div ref={messagesEndRef} /> */}
                                </ScrollContainer>

                                {/* DM 보내는 작성 칸 */}
                                <InputForm>
                                    <Input
                                        name="message"
                                        value={null}
                                        onChange={null}
                                        onKeyPress={null}
                                        placeholder="메시지 입력..."
                                    />
                                    <P type={null} onClick={() => {}}>
                                        메시지보내기
                                    </P>
                                </InputForm>
                            </SendMessageContainer>
                        </SendMessageBoxs>

                    </MessageContainer>
                </Messages>
            </Wrap>

        </React.Fragment>
    )
}

const Wrap = styled.div`
  width: 100vw
  height: 1000px
  z-index: 1;
  background-color: #fafafa;
  overflow: hidden auto;
  position: relative;
  top: 60px;
`;

const Messages = styled.div`
  width: 1000px;
  height: 900px;
  margin: 20px auto;
  border: 1px solid #ddd;
  background-color: #fff;
  z-index: 3;
`;

const MessageContainer = styled.div`
  display: flex;
`;

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mine = styled.div`
  display: flex;
  width: 349px;
  height: 60px;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;

  select {
    display: flex;
    align-items: center;
    margin: 0px 80px 0px 140px;
    padding: 0px 5px 0px 0px;
    font-size: 16px;
    border: none;
    outline: none;
  }
`

const SendUser = styled.div`
  width: 349px;
  height: 840px;
  border-right: 1px solid #c7c7c7;
  display: flex;
  flex-direction: column;
`;

const SendUserProfile = styled.div`
  display: flex;
  width: 270px;
  margin: 20px auto;
  cursor: pointer;
  &:hover {
    color: silver;
  }
`

const OtherImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`

const Name = styled.div`
    padding-left: 20px;
    position: relative;
    margin: 8px 0px 0px 0px;
`;

const NickName = styled.div`
    font-weight: bold;
`
const SendMessageBoxs = styled.div`
  width: 650px;
  height: 60px;
  border-bottom: 1px solid #c7c7c7;
`;

const SendMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 830px;
`;

const ScrollContainer = styled.div`
  height: 680px;
  overflow: scroll;
  overflow-x: hidden;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  margin: 10px auto;
`;

const MessageList = styled.div``;

const PostUserContainer = styled.div`
  display: flex;
  float: right;
  align-items: flex-end;
  p {
    font-size: 11px;
    color: #5c5c5c;
    display: none;
  }
  &:hover p {
    display: block;
  }
`;

const PostUser = styled.div`
  float: right;
  word-wrap: ${(props) => props.need && "break-word"};
  max-width: ${(props) => props.need && "240px"};
  max-height: ${(props) => props.need && "100%"};
  border-radius: 20px;
  background-color: #f2f2f2;
  padding: 8px 12px;
`;

const Span = styled.span`
  font-size: 14px;
`;

const SendUserContainer = styled.div`
  display: flex;
  float: left;
  align-items: flex-end;
  p {
    font-size: 11px;
    color: #5c5c5c;
    display: none;
  }
  &:hover p {
    display: block;
  }
`;

const SendDMUser = styled.div`
  float: left;
  word-wrap: ${(props) => props.need && "break-word"};
  max-width: ${(props) => props.need && "240px"};
  max-height: ${(props) => props.need && "100%"};
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  padding: 8px 12px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 90%;
  .icon {
    margin-top: 4px;
    font-size: 25px;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 15px;
    font-weight: bold;
  }
`;

const InputForm = styled.div`
  height: 50px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 550px;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #c7c7c7;
  border-radius: 25px;
`;

const P = styled.p`
  display: ${(props) => (props.type ? "block" : "none")};
  position: relative;
  top: -28px;
  left: 81%;
  font-size: 14px;
  color: #0095f6;
  font-weight: bold;
`;





export default Direct