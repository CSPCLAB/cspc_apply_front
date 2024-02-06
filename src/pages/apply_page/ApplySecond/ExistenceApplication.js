import React from "react";
import { useAsync } from "react-async";
import dateFormat, { masks } from "dateformat";

import GoWriteApply from "../Components/GoWriteApply";

import "./ExistenceApplication.css";

const ExistenceApplication = ({ setPage, updateTime }) => {
  return (
    <div className="ExistenceApplication">
      <div className="ExistenceApplication_1">작성 중인 지원서가 있습니다.</div>
      {/* logic 필요 */}
      <div className="ExistenceApplication_2">
        {dateFormat(updateTime, "yyyy.mm.dd HH:MM에 저장된 지원서")}
      </div>
      <div className="GoWriteApplyStyle">
        <GoWriteApply isChecked={true} setPage={setPage} />
      </div>
    </div>
  );
};

export default ExistenceApplication;
