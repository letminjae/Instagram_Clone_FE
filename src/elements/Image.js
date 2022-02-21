import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const {
    imageType,
    src,
    size,
    bgsize,
    width,
    height,
    margin,
    padding,
    _onClick,
    cursor,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    image_auto,
    display,
    float,
    radius,
    className,
    shape,
  } = props;

  const styles = {
    imageType,
    shape,
    src,
    size,
    height,
    width,
    margin,
    padding,
    cursor,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    image_auto,
    display,
    float,
    radius,
    className,
    bgsize,
  };

  if (imageType === "logo") {
    return <ImageLogo {...styles} onClick={_onClick}></ImageLogo>;
  }

  if (shape === "myIcon") {
    return <MyProfile {...styles} onClick={_onClick} />;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }

  if (shape === "imgBtn") {
    return (
      <AspectOutter>
        <ImgBtn {...styles} onClick={_onClick} />
      </AspectOutter>
    );
  }

  // 게시물 작성시 미리보기 프리뷰
  if (imageType === "preview") {
    return <ImageRectangle {...styles}></ImageRectangle>;
  }

  // 마이페이지 프로필 커스텀
  if (imageType === "mypage_profile") {
    return <MyImageCC {...styles}></MyImageCC>;
  }

  // 마이페이지 게시물 커스텀
  if (imageType === "mypage_post") {
    return <MyImageRT {...styles} onClick={_onClick}></MyImageRT>;
  }

  //test
  if (imageType === "test") {
    return <ImgBtn {...styles} onClick={_onClick}></ImgBtn>;
  }

  return (
    <React.Fragment>
      <MyProfile {...styles} onClick={_onClick} />
    </React.Fragment>
  );
};

Image.defaultProps = {
  imageType: "logo",
  src: "https://www.snsboom.co.kr/common/img/default_profile.png",
  size: 40,
  bgsize: "cover",
  _onClick: () => {},
  cursor: null,
  maxWidth: null,
  maxHeight: null,
  image_auto: false,
  float: null,
};

//사각형 이미지일때 스타일
const ImageRectangle = styled.div`
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;
//로고 이미지 일때 스타일
const ImageLogo = styled.div`
  cursor: ${(props) => props.cursor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;

const AspectOutter = styled.div`
  width: ${(props) => props.width};
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  ${(props) => (props.src ? `background-image: url(${props.src});` : "")}
  background-size: cover;
`;

const MyProfile = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  ${(props) => (props.src ? `background-image: url(${props.src});` : "")}
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const ImgBtn = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  ${(props) => (props.src ? `background-image: url(${props.src});` : "")}
  background-size: cover;
  &:hover {
    opacity: 0.9;
  }
`;

// 마이페이지 프로필 커스텀
const MyImageCC = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  min-width: 150px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: ${(props) => props.margin};
`;

//마이페이지 게시글 커스텀
const MyImageRT = styled.div`
  float: ${(props) => props.float};
  ${(props) =>
    props.image_auto
      ? `background-repeat: no-repeat; background-position: center; background-size: cover;`
      : ""}
  display: ${(props) => props.display};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-size: ${(props) => props.bgsize};
  background-image: url("${(props) => props.src}");
`;

export default Image;
