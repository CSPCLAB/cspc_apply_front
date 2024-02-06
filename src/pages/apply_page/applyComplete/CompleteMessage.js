import React from "react";
import { useAsync } from "react-async";

import { get_recruit_info } from "apis/get_recruit";

import dateFormat, { masks } from "dateformat";

import "./CompleteMessage.css";

const CompleteMessage = () => {
  const { data, error, isLoading } = useAsync(
    { promiseFn: get_recruit_info },
    [],
  );

  // 서류결과 시간 api콜

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data)
    return (
      <div className="CompleteMessage">
        <div className="CompleteTitle">제출이 완료되었습니다.</div>
        <div className="CompleteContent">제출해주셔서 감사합니다.</div>
        <div className="CompleteContent">
          꼼꼼히 읽고 지원자님을 모실 수 있도록 하겠습니다.
        </div>
        <div className="CompleteContent">
          <br />
        </div>
        <div className="CompleteContent">
          {dateFormat(
            data.announce_middle_time,
            "서류 결과 안내는 m월 dd일 오후 h시 이후 홈페이지에서 알려드립니다.",
          )}
        </div>
        <br />
        <br />
        <div className="CanCorrection">
          지원기간 내에는 지원서를 수정할 수 있습니다.
        </div>
      </div>
    );
};

export default CompleteMessage;
