import React from "react";

import "../styles/AgreePrivacy.css";

import AgreeAbove from "./AgreeAbove";
import { isBrowser, isMobile } from "react-device-detect";

import { Container, Row, Col } from "react-bootstrap";

const AgreePrivacy = ({ setPage }) => {
  if (isBrowser) {
    return (
      <div className="AgreePrivacy">
        <div className="IntroducePrivacy_1">
          지원 절차 진행을 위해 이름, 전화번호 등의 정보를 수집하고 있습니다.
        </div>
        <div className="IntroducePrivacy_2">
          개인정보 수집 및 이용 동의(필수)
        </div>
        <div className="IntroducePrivacy_3">
          <div className="PrivacyBox">
            <div className="InPrivacyBox InBox_1">
              CSPC는 신입 부원 지원 현황 확인, 전형 진행, 지원서 저장 및 수정,
              합격 여부 확인 등을 위해 아래와 같이 개인정보를 수집・이용합니다.
            </div>
            <div className="InPrivacyBox InBox_2">수집 항목</div>
            <div className="InPrivacyBox InBox_3">
              - 이름, 전화번호, 학번, 학기, 면접 결과(대상인 경우)
            </div>
          </div>
        </div>
        <AgreeAbove setPage={setPage} />
      </div>
    );
  } else if (isMobile) {
    return (
      <Container className="MobileAgreePrivacy">
        <Col>
          <Row className="MobileIntroducePrivacy_1">
            지원 절차 진행을 위해 이름, 전화번호 등의 정보를 수집하고 있습니다.
          </Row>
          <Row>
            <Container fluid className="MobilePrivacyBox">
              <br />
              <Col className="MobileInBox_1">
                CSPC는 신입 부원 지원 현황 확인, 전형 진행, 지원서 저장 및 수정,
                합격 여부 확인 등을 위해 아래와 같이 개인정보를
                수집・이용합니다.
              </Col>
              <br />
              <Col className="MobileInBox_2">수집항목</Col>
              <Col className="MobileInBox_3">
                - 이름, 전화번호, 학번, 학기, 면접 결과(대상인 경우)
              </Col>
              <br />
            </Container>
          </Row>
        </Col>
        <AgreeAbove setPage={setPage} />
      </Container>
    );
  }
};

export default AgreePrivacy;
