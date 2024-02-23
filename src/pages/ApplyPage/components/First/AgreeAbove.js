import React, { useState } from "react";

import GoWriteApply from "../GoWriteApply";

import "../styles/AgreeAbove.css";
import { isBrowser, isMobile } from "react-device-detect";
import { Col, Container, Row } from "react-bootstrap";

const AgreeAbove = ({ setPage }) => {
  const [checked, setChecked] = useState(0);

  const isChecked = () => {
    if (checked === 0) return false;
    else return true;
  };

  const changeChecked = () => {
    if (checked === 0) setChecked(1);
    else setChecked(0);
  };

  if (isBrowser) {
    return (
      <div className="AgreeAboveCheck">
        <div>
          {isChecked() ? (
            <button className="checked Button" onClick={changeChecked}></button>
          ) : (
            <button
              className="unChecked Button"
              onClick={changeChecked}
            ></button>
          )}
        </div>
        <div className="AgreeAboveWord">위 사항에 동의합니다.</div>
        <div className="GoWriteApplyButton">
          {/* isChecked() 가 1일 때만 링크 이동할 수 있게 하기 */}
          <GoWriteApply isChecked={isChecked()} first setPage={setPage} />
        </div>
      </div>
    );
  } else if (isMobile) {
    return (
      <Container fluid className="MobileAgreeAboveCheck">
        <Row>
          <Col xs={1}>
            {isChecked() ? (
              <button
                className="checked MobileButton"
                onClick={changeChecked}
              ></button>
            ) : (
              <button
                className="unChecked MobileButton"
                onClick={changeChecked}
              ></button>
            )}
          </Col>
          <Col xs={11}>
            <div className="MobileAgreeAboveWord">위 사항에 동의합니다.</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="MobileGoWriteApplyButton">
              {/* isChecked() 가 1일 때만 링크 이동할 수 있게 하기 */}
              <GoWriteApply isChecked={isChecked()} first setPage={setPage} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AgreeAbove;
