import React from "react";

import "./styles/Introduce.css";
import "./styles/Elite.css";

import { Container, Row , Col} from "react-bootstrap";

const Elite = () => {
  return (
    // <div className="main">
    // <div className="mobile_base_">
    // <div className="picFrame_">
    <Container>
      <Row>
        <Col><div className="picIntro1_">소수 정예 학회</div></Col>
      </Row>

      <Row>
        <Col><div className="sepLine_"></div></Col>
      </Row>

      <Row>
        <Col>
        <div className="picIntro2_">
          CSPC LAB은 소수로 이루어져, 서로 끈끈한 관계를 가지고 있습니다.
        </div>
        </Col>
      </Row>
      
   </Container>
    // </div>
    // </div>
  );
};

export default Elite;
