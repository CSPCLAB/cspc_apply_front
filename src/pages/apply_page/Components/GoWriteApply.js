import React from "react";

import "./Components.css";

const GoWriteApply = ({ isChecked, first, second, setPage }) => {
  // isChecked=true 일 때만 이동
  // first=true -> 첫번째 지원
  // second=true -> 두번째 지원
  // 지원서 쓰는 창으로 움직일 수 있게

  const goWrite = () => {
    if (isChecked) {
      window.scrollTo(0, 0);
      setPage(3);
    } else {
      alert("개인정보 수집 및 이용 동의가 필요합니다.");
    }
  };

  return (
    <button className="GoWriteApply" onClick={goWrite}>
      지원서 작성하기
    </button>
  );
};

export default GoWriteApply;
