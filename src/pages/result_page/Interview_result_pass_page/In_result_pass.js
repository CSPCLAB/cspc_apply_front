import React, { useEffect, useState } from "react";
import "./In_result_pass.css";
import Confetti from "react-confetti";

const In_result_pass = ({ resume }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        tweenDuration={50000}
        numberOfPieces={500}
      />
      <div className="black">
        <div className="pass_resultbox">
          <div className="pass_resultlen">면접결과</div>
        </div>
        <div className="pass_line"></div>
        <div className="pass_resultbox2">
          <div className="pass_resultlen2">{resume.name} 님 축하드립니다!</div>
          <div className="pass_resultlen3">
            CSPC 신입 부원 모집에 최종합격하셨습니다.
            <br />
            CSPC 랩원이 되신 것을 진심으로 축하드립니다.
            <br />
            <br />
            곧 신입 부원 온보딩을 위해
            <br />
            입력해주신 연락처로 공지사항을 전달드릴 예정입니다.
            <br />
            조금만 기다려주세요.
            <br />
            <br />
            두근구근^^
          </div>
        </div>
      </div>
    </>
  );
};

export default In_result_pass;
