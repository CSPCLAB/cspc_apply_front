import React from "react";

import img_3 from "../components/img/main_img_3.png";

import "../components/GoToApply";

import "../Main.css";
import GoToApply from "../components/GoToApply";

const ImgMain_3 = () => {
  return (
    <div
      className="main"
      style={{
        textAlign: "center",
        position: "relative",
      }}
    >
      <img src={img_3} className="ImgMainStyle" />
      {/* gray rectangle */}
      <div
        className="ImgMainStyle"
        style={{
          position: "absolute",
          width: "1920px",
          height: "100%",

          background: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "721px",

            width: "1330px",

            left: "310px",
          }}
        >
          <div className="letterStyle_3">랩실 관리</div>
          <div
            className="letterStyle_4"
            style={{
              top: "53px",
            }}
          >
            리치과학관 914호 실습실을 관리합니다.
          </div>
          <div
            className="letterStyle_3"
            style={{
              left: "451px",
            }}
          >
            스터디/프로젝트
          </div>
          <div
            className="letterStyle_4"
            style={{
              top: "53px",
              left: "451px",
            }}
          >
            함께 배우고 싶은 것 무엇이든 응원합니다.
          </div>
          <div
            className="letterStyle_3"
            style={{
              left: "912px",
            }}
          >
            선배 찬스
          </div>
          <div
            className="letterStyle_4"
            style={{
              top: "53px",
              left: "912px",
            }}
          >
            언제든 물어볼 수 있는 선배가 있어 든든합니다.
          </div>
        </div>
        <GoToApply left="1450px" top="876px" />
      </div>
    </div>
  );
};

export default ImgMain_3;
