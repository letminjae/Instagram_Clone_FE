import styled from 'styled-components';

export default function Story() {
    return (
        <Wrap>
            <ImgArea>
                <ProfileImage>
                    <Img
                        src="https://avatars.githubusercontent.com/u/96935557?v=4"
                        alt="letminjae"
                    />
                </ProfileImage>
                <ProfileText>letminjae</ProfileText>
            </ImgArea>
            <ImgArea>
                <ProfileImage>
                    <Img
                        src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
                        alt="letminjae"
                    />
                </ProfileImage>
                <ProfileText>hahahaha</ProfileText>
            </ImgArea>
            
            <ImgArea>
                <ProfileImage>
                    <Img
                        src="https://media.vlpt.us/images/wowba/post/25b44f82-1a1c-482e-bab7-3fe7bc04fa2a/image.png?w=768"
                        alt="hanghae99"
                    />
                </ProfileImage>
                <ProfileText>hanghae99</ProfileText>
            </ImgArea>
        </Wrap>
    )
}

const Wrap = styled.div`
  width: 636px;
  height: 88px;
  padding: 16px 0;
  margin-bottom: 24px;
  background-color: #fff;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const ImgArea = styled.div`
  width: 75px;
  height: 84px;
  margin: 0 10px;
  text-align: center;
`;

const ProfileImage = styled.div`
  height: 62px;
  width: 62px;
  border : 2px solid silver;
  border-radius: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 5px;
`;

const Img = styled.img`
  width: 56px;
  height: 56px;
  outline: none;
  border-radius: 100%;
`;

const ProfileText = styled.div`
  color: gray;

`
