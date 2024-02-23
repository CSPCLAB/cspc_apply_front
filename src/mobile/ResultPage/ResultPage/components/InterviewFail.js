import React from "react";
import "./styles/InterviewFail.css";

const In_result_fail = ({ resume }) => {
  return (
    <div className="black_">
      <div className="fail_resultbox_">
        <div className="fail_resultlen_">면접결과</div>
      </div>
      <div className="fail_line_"></div>
      <div className="fail_resultbox2_">
        <div className="fail_resultlen2_">
          {resume.name} 님 아쉽지만, 모시지 못하게 되었습니다
        </div>
        <div className="fail_resultlen3_">
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

export default In_result_fail;
