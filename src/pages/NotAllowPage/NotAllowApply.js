import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useAsync } from "react-async";
import { get_master_info } from "apis/master";

import "./components/styles/NotAllowApply.css";
import { isBrowser, isMobile } from "react-device-detect";
import { Container, Row, Col } from "react-bootstrap";

const NotAllowApply = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_master_info });

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (isBrowser) {
      return (
        <>
          <div className="black">
            <div className="not_allowbox">
              <div className="not_allowlen1">
                현재 신입 부원을 받고 있지 않습니다.
                <br />
                CSPC는 상반기 학기 초(정기), 하반기 학기 초 (비정기)에 신입
                부원을 모집합니다.
              </div>
              <div className="not_allowlen2">
                문의
                <br />
                학회장 {data.name} {data.email}
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="button_">CSPC 홈으로 돌아가기</div>
              </Link>
            </div>
          </div>
        </>
      );
    } else if (isMobile) {
      return (
        <Container fluid className="mobileNotAllow">
          <Col>
            <Row>현재 신입 부원을 받고 있지 않습니다.</Row>
            <br />
            <Row>
              CSPC는 상반기 학기 초(정기), 하반기 학기 초 (비정기)에 신입 부원을
              모집합니다.
            </Row>
            <br />
            <Row>문의</Row>
            <Row>
              학회장 {data.name} {data.email}
            </Row>
          </Col>
          <br />
          <Col>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="button_">CSPC 홈으로 돌아가기</div>
            </Link>
          </Col>
        </Container>
      );
    }
  }
};

export default NotAllowApply;
