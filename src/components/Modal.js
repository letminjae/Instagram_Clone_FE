import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Modal({
  className,
  visible,
  children,
  width,
  outline,
  maxWidth,
  borderRadius,
  padding,
}) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper className={className} visible={visible}>
        <ModalInner
          className="modal-inner"
          width={width}
          maxWidth={maxWidth}
          style={{ outline: "none" }}
          borderRadius={borderRadius}
          padding={padding}
        >
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool,
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  top: 50%;
  transform: translate(0, -50%);
  margin: 0 auto;
  padding: ${(props) => props.padding};
  outline: ${(props) => props.outline};
`;