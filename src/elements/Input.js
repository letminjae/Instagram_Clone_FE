import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

const Input = (props) => {
  const {
    type,
    value,
    placeholder,
    _onChange,
    width,
    multiLine,
    onSubmit,
    border,
    padding,
    margin,
    defaultValue,
    bg,
    left,
    borderRadius,
  } = props; 
  const styles = {
    padding: padding,
    margin: margin,
    placeholder: placeholder,
    width: width,
    border: border,
    bg: bg,
    left: left,
    borderRadius: borderRadius,
  };
  if (multiLine) {
    return (
      <Grid>
        <ElTextarea
          {...styles}
          rows={5}
          value={value}
          defaultValue={defaultValue}
          onChange={_onChange}
        ></ElTextarea>{" "}
        {/* rows는 몇줄을넣을지 */}
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <InputSome
          {...styles}
          type={type}
          value={value}
          onChange={_onChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        ></InputSome>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  type: "text",
  value: undefined,
  placeholder: "입력해주세요.",
  label: null,
  _onChange: () => {},
  onSubmit: () => {},
  padding: null,
  margin: null,
  width: "100%",
  bg: null,
  border: "1px solid #212121",
  borderRadius: null,
};

const ElTextarea = styled.textarea`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  left: ${(props) => props.left};
  box-sizing: border-box;
  display: block;
`;

const InputSome = styled.input`
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  left: ${(props) => props.left};
  border-radius: ${(props) => props.borderRadius};
  ${(props) => (props.bg ? `background-color:${props.bg};` : "")}
`;

export default Input;