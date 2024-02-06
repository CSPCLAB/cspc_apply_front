import React from "react";
import "./Doc_result_fail.css";

const Doc_result_fail = ({ resume }) => {
  return (
    <div className="black">
      <div className="fail_resultbox">
        <div className="fail_resultlen">서류결과</div>
      </div>
      <div className="fail_line"></div>
      <div className="fail_resultbox2">
        <div className="fail_resultlen2">
          {resume.name} 님 아쉽지만, 모시지 못하게 되었습니다
        </div>
        <div className="fail_resultlen3">
          CSPC 신입 부원 모집에
          <br />
          최선을 다해 임해주셔서 정말 감사합니다.
          <br />
          이번 기회에는 아쉽지만 모시지 못하게 되었습니다.
          <br />
          <br />
          역량이 부족해서가 절대 아니니
          <br />
          너무 낙심해 마세요.
          <br />
          <br />
          다시 한 번 전형 참가에 진심으로 감사드립니다.
        </div>
      </div>
    </div>
  );
};

export default Doc_result_fail;
