import React from "react";

import img_3 from "../components/img/main_img_3.png";

import "../components/GoToApply";

import "./ImgMain.css";

import GoToApply from "../components/GoToApply";

const ImgMain_3 = () => {
  return (
    <div className="ImgMainBox">
      <img src={img_3} className="ImgMainStyle" />
      <div className="GrayFilterStyle">
        <div className="LetterBox_3">
          <div className="LetterBox_3_1">
            <div className="WhiteWord Title">랩실관리</div>
            <div className="WhiteWord Content">
              리치과학관 914호를 관리합니다.
            </div>
          </div>
          <div className="LetterBox_3_1">
            <div className="WhiteWord Title">스터디/프로젝트</div>
            <div className="WhiteWord Content">
              함께 배우고 싶은 것 무엇이든 응원합니다.
            </div>
          </div>
          <div className="LetterBox_3_1">
            <div className="WhiteWord Title">선배 찬스</div>
            <div className="WhiteWord Content">
              언제든 물어볼 수 있는 선배가 있어 든든합니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgMain_3;
