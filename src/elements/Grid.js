import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    is_fix,
    border,
    is_flex,
    width,
    padding,
    margin,
    bg,
    _onClick,
    position,
    height,
    cursor,
    hide,
    minWidth,
    maxWidth,
    minHeight,
    top,
    left,
    right,
    bottom,
    zindex, //z-index 값을 가진 요소가 작은 값의 요소 위를 덮음
    borderRadius,
    borderRight,
    berderLeft,
    borderBottom,
    borderTop,
    overflowy, // 위아래가 넘칠때 어떻게 보여줄지
    overflowx, // 옆이 넘칠때 어떻게 보여줄지
    media,
  } = props;

  const styles = {
    is_flex: is_flex,
    is_fix: is_fix,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    position: position,
    cursor: cursor,
    hide: hide,
    borderTop: borderTop,
    borderBottom: borderBottom,
    berderLeft: berderLeft,
    borderRight: borderRight,
    borderRadius: borderRadius,
    minWidth: minWidth,
    minHeight: minHeight,
    maxWidth: maxWidth,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    zindex: zindex,
    media: media,
    overflowy: overflowy,
    overflowx: overflowx,
  };

  return (
    <>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_fix: false,
  width: "100%",
  height: "100%",
  margin: false,
  padding: false,
  bg: false,
  _onClick: () => {},
  border: false,
  borderTop: false,
  borderBottom: false,
  berderLeft: false,
  borderRight: false,
  borderRadius: null,
  position: false,
  cursor: "Default",
  minWidth: null, // 최소 width 값 지정
  minHeight: null,
  maxWidth: null,
  top: null,
  left: null,
  right: null,
  bottom: null,
  zindex: false,
  overflowy: false,
  overflowx: false,
  media: "false",
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  box-sizing: border-box;
  cursor: ${(props) => props.cursor};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  ${(props) => (props.overflowy ? ` overflow-y:${props.overflowy};` : "")}
  ${(props) => (props.overflowx ? ` overflow-x:${props.overflowx};` : "")}
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
${(props) => (props.bg ? `background-color:${props.bg};` : "")}
/* ${(props) =>
    props.is_flex
      ? `display: flex; align-tiems: center; justify-content: space-between;`
      : ""} */
${(props) => (props.is_flex ? `display: flex; align-items: center;` : "")}
${(props) => (props.border ? `border:${props.border};` : "border: none;")}
${(props) => (props.is_fix ? ` position: fixed;   z-index: 1;` : "")}
${(props) => (props.position ? `position: ${props.position};` : "")}
${(props) =>
    props.borderBottom ? `border-bottom : ${props.borderBottom};` : ""}
  ${(props) => (props.borderBottom ? `border-top : ${props.borderTop};` : "")}
  ${(props) => (props.berderLeft ? `border-left : ${props.berderLeft};` : "")}
${(props) =>
    props.hide ? `display:none` : "none"}; // 가입양식 유효성 검사시 안내문구
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  z-index: ${(props) => (props.zindex ? `1;` : null)};
  border-radius: ${(props) => props.borderRadius};
  @media (max-width: 700px) {
    width: 100%;
    padding: 0px;
  }
  ${(props) =>
    props.media ? `@media (max-width:${props.media}){display:none};` : ""}
`;

export default Grid;
