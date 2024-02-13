import React from "react";

// 사용하지 않는 이미지 -> 삭제 필요
import img_2 from "../components/img/main_img_2.png";

import "./ImgMain.css";

const ImgMain_2 = () => {
  return (
    <div className="ImgMainBlackBackgroundStyle">
      <div className="ImgMainLetterBox_2 ImgMain_2_Title">
        <div className="WhiteWord">CSPCLAB은</div>
        <div className="BlueWord ImgMainLetterBox_2_1">소수정예</div>
        <div className="WhiteWord ImgMainLetterBox_2_1">를 지향하는</div>
        <div className="WhiteWord">서강대학교 컴퓨터공학과 학회입니다.</div>
      </div>
    </div>
  );
};

export default ImgMain_2;
