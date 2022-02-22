import React from "react";
import styled from "styled-components";
import Text from '../elements/Text'
import Image from '../elements/Image'

export default function Recommand() {

    return (
        <Wrap>
            <MyProfile>
                <MyProfileImage
                    src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
                    alt="user"
                />
                <Name>
                    <NickName>anonymous</NickName>
                </Name>
                <Conversion>깃허브</Conversion>
            </MyProfile>

            <OtherRecommand>
                <Text bold size="14px">회원님을 위한 추천</Text>
                <Text margin="14px 0px 0px 80px" bold size="14px" color="#4368FF;">모두 보기</Text>
            </OtherRecommand>

            <OtherPeople>
                <OtherImage
                    src="https://pbs.twimg.com/profile_images/799445590614495232/ii6eBROd_400x400.jpg"
                    alt="박보검" />
                <Name>
                    <NickName>박재균</NickName>
                    <RealName>Back-End Developer</RealName>
                </Name>
                <BackConversion>깃허브</BackConversion>
            </OtherPeople>

            <OtherPeople>
                <OtherImage
                    src="https://cdnweb01.wikitree.co.kr/webdata/editor/202011/11/img_20201111165202_be9a21aa.webp"
                    alt="송중기" />
                <Name>
                    <NickName>이규진</NickName>
                    <RealName>Back-End Developer</RealName>
                </Name>
                <BackConversion>깃허브</BackConversion>
            </OtherPeople>

            <OtherPeople>
                <OtherImage
                    src="https://t1.daumcdn.net/cfile/tistory/99BA8E425ADF22A30D"
                    alt="강동원" />
                <Name>
                    <NickName>문병민</NickName>
                    <RealName>Back-End Developer</RealName>
                </Name>
                <BackConversion>깃허브</BackConversion>
            </OtherPeople>

            <OtherPeople>
                <OtherImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW35vmdcrv9fqVq57o40A1XDyFzsYXxAi5g&usqp=CAU"
                    alt="서강준" />
                <Name>
                    <NickName>한동윤</NickName>
                    <RealName>Front-End Developer</RealName>
                </Name>
                <FrontConversion>깃허브</FrontConversion>
            </OtherPeople>

            <OtherPeople>
                <OtherImage
                    src="https://file2.nocutnews.co.kr/newsroom/image/2020/01/01/20200101093641185867_0_786_786.jpg"
                    alt="김수현" />
                <Name>
                    <NickName>차민재</NickName>
                    <RealName>Front-End Developer</RealName>
                </Name>
                <FrontConversion>깃허브</FrontConversion>
            </OtherPeople>

            <Footer>
                소개·도움말·홍보·센터API·채용정보 <br/>
                개인정보처리방침·약관·위치·인기 계정·해시태그·언어<br/>
                <br/>
                © 2022 INSTAGRAM FROM META
            </Footer>

        </Wrap >
    )
}

const Wrap = styled.div`
    width: 293px;
    height: 415px;
    position: fixed;
    top: 130px;
    right: 15%;
    left: 61.5%;
    @media screen and (max-width: 920px) {
        display: none;
    }
`;

const MyProfile = styled.div`
    display: flex;
    align-items: center;
`;

const MyProfileImage = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 100%;
`;
const Name = styled.div`
    padding-left: 20px;
    position: relative;
`;

const NickName = styled.div`
    font-weight: bold;
`;

const RealName = styled.div`
    font-size: 10px;
`
const Conversion = styled.div`
    color : #4368FF;
    font-weight: bold;
    font-size: 12px;
    padding: 5px 0px 0px 62px;
`

const BackConversion = styled.div`
    color : #4368FF;
    font-weight: bold;
    font-size: 12px;
    padding: 6px 0px 0px 78px;
`
const FrontConversion = styled.div`
    color : #4368FF;
    font-weight: bold;
    font-size: 12px;
    padding: 6px 0px 0px 75px;
`

const OtherRecommand = styled.div`
    display: flex; 
    margin : 20px 0px 10px 0px;
`

const OtherPeople = styled.div`
    display: flex;
    position: relative;
    margin : 20px 0px 10px 0px;
`

const OtherImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`

const Footer = styled.div`
    margin: 30px 0px;
    lineHeight: 2;
    font-size: 10px;
    color: gray;
`
