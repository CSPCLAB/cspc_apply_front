import React from "react";
import { useAsync } from "react-async";
import dateFormat, { masks } from "dateformat";

import GoWriteApply from "../GoWriteApply";

import { Container, Row, Col } from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";

import "../styles/ExistenceApplication.css";

const ExistenceApplication = ({ setPage, updateTime }) => {
  if (isBrowser) {
    return (
      <div className="ExistenceApplication">
        <div className="ExistenceApplication_1">
          작성 중인 지원서가 있습니다.
        </div>
        {/* logic 필요 */}
        <div className="ExistenceApplication_2">
          {dateFormat(updateTime, "yyyy.mm.dd HH:MM에 저장된 지원서")}
        </div>
        <div className="GoWriteApplyStyle">
          <GoWriteApply isChecked={true} setPage={setPage} />
        </div>
      </div>
    );
  } else if (isMobile) {
    return (
      <Container className="MobileExistenceApplication">
        <div className="MobileExistenceApplication_1">
          작성 중인 지원서가 있습니다.
        </div>
        {/* logic 필요 */}
        <div className="MobileExistenceApplication_2">
          {dateFormat(updateTime, "yyyy.mm.dd HH:MM에 저장된 지원서")}
        </div>
        <div className="MobileGoWriteApplyStyle">
          <GoWriteApply isChecked={true} setPage={setPage} />
        </div>
      </Container>
    );
  }
};

export default ExistenceApplication;
