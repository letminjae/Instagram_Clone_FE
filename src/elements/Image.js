import React from "react";
import styled from "styled-components";

const Image = (props) => {

  const {
      imageType,
      src,
      size,
      bgsize,
      width,
      height,
      margin,
      padding
    } = props;

  const styles = {
    imageType,
    src,
    size,
    bgsize,
    width,
    height,
    margin,
    padding,
  };

  // 로고 이미지 쓸때
  if (imageType === "logo") {
    return <ImageLogo {...styles}></ImageLogo>;
  }

  // 원형 이미지 : 프로필 사진, 스토리 사진 쓸때
  if (imageType === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  // 게시물 이미지 쓸때
  if (imageType === "rectangle") {
    return (
      <React.Fragment>
        <OutBox>
          <InBox {...styles} />
        </OutBox>
      </React.Fragment>
    );
  }

  // 게시물 작성시 미리보기 프리뷰
  if (imageType === "preview") {
    return <ImageRectangle {...styles}></ImageRectangle>;
  }


  return (
    <>
      <OutBox>
        <InBox {...styles} />
      </OutBox>
    </>
  );
};

Image.defaultProps = {
  imageType: "logo",
  src: "https://www.snsboom.co.kr/common/img/default_profile.png",
  size: 40,
  bgsize: "cover",
};

//사각형 이미지일때 스타일
const ImageRectangle = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;

//로고 이미지 일때 스타일
const ImageLogo = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;

//반응형
const OutBox = styled.div`
  width: 100%;
`;

//비율 맞추기
const InBox = styled.div`
  position: relative;
  padding-top: 100%;
  // 요소내의 컨텐츠가 너무 커서 요소내에 모두 보여주기 힘들때 hidden 하면 넘치는 부분은 잘림
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: ${(props) => props.bgsize};
`;

// 원형 이미지일때 스타일
// --size 변수 쓸때 var(--size) 고고
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  // width: 36px;
  // height: 36px;
  // border-radius: 36px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  min-width: 36px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: ${(props) => props.margin};
`;

export default Image;