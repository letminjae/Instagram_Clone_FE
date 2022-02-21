import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    wraper,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    children,
    border,
    is_flex,
    width,
    padding,
    margin,
    bg,
    color,
    _onClick,
    position,
    justify,
    height,
    overflow,
    radius,
    className,
    align,
    borderB,
    wrap,
    cursor,
  } = props;

  const styles = {
    wraper: wraper,
    display: display,
    flexDirection: flexDirection,
    justifyContent: justifyContent,
    alignItems: alignItems,
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    color: color,
    position: position,
    justify: justify,
    overflow: overflow,
    border: border,
    radius: radius,
    className: className,
    align: align,
    borderB: borderB,
    wrap: wrap,
    cursor: cursor,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
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
  alignItems: null,
  display: null,
  flexDirection: null,
  justifyContent: null,
  wraper: false,
};

const GridBox = styled.div`
  ${(props) => (props.wraper ? `flex-wrap: ${props.wraper};` : "")}
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  box-sizing: border-box;
  cursor: ${(props) => props.cursor};
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  ${(props) => (props.overflowy ? ` overflow-y:${props.overflowy};` : "")}
  ${(props) => (props.overflowx ? ` overflow-x:${props.overflowx};` : "")}
  ${(props) => (props.padding ? `padding:${props.padding};` : "")}
  ${(props) => (props.margin ? `margin:${props.margin};` : "")}
${(props) => (props.bg ? `background-color:${props.bg};` : "")}
${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: center;`
      : ""}
${(props) => (props.border ? `border:${props.border};` : "border: none;")}
${(props) => (props.position ? `position: ${props.position};` : "")}
${(props) =>
    props.borderBottom ? `border-bottom : ${props.borderBottom};` : ""}
  ${(props) => (props.borderTop ? `border-top : ${props.borderTop};` : "")}
  ${(props) => (props.berderLeft ? `border-left : ${props.berderLeft};` : "")}

  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  min-height: ${(props) => props.minHeight};
  border-radius: ${(props) => props.borderRadius};
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.is_flex ? "display: flex; align-items: center;" : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
  ${(props) => (props.borderB ? `border-bottom: ${props.borderB};` : "")}
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
  ${(props) => (props.overflow ? `overflow: ${props.overflow};` : "")}
  ${(props) => (props.className ? `className: ${props.className};` : "")}
  ${(props) => (props.align ? `text-align: ${props.align};` : "")}
  ${(props) => (props.wrap ? `flex-wrap: ${props.wrap};` : "")}
  ${(props) => (props.cursor ? `cursor: ${props.cursor};` : "")}
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default Grid;
