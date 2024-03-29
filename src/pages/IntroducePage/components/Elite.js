import React from "react";

import "./styles/Introduce.css";
import "./styles/Elite.css";

import { Container, Row } from "react-bootstrap";

const Elite = () => {
  return (
    <div className="main">
      <div className="picFrame">
        <div className="picIntro">
          <div className="picIntro1">소수 정예 학회</div>
          <div className="picIntro2">
            CSPC LAB은 소수로 이루어져, 서로 끈끈한 관계를 가지고 있습니다.
          </div>
        </div>
        <div className="sepLine"></div>
      </div>
    </div>
  );
};

export default Elite;
