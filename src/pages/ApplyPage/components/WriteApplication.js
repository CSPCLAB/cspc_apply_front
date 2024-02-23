import React from "react";

import "./styles/Components.css";

import { Container, Row, Col } from "react-bootstrap";

import { isBrowser, isMobile } from "react-device-detect";

const WriteApplication = () => {
  if (isBrowser) {
    return (
      <div className="WriteApplicationStyle">
        <div className="WriteApplicationWordStyle">지원서 작성하기</div>
      </div>
    );
  } else if (isMobile) {
    return (
      <Container className="MobileWriteApplicationStyle">
        <div className="MobileWriteApplicationWordStyle">지원서 작성하기</div>
      </Container>
    );
  }
};

export default WriteApplication;
