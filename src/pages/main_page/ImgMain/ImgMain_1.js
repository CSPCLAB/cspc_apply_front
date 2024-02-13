import React from "react";

import img_1 from "../../../assets/images/main/main_img_1.png";

import GoToApply from "../components/GoToApply";

import "./ImgMain.css";

const ImgMain_1 = () => {
  return (
    <div className="ImgMainBox">
      <img src={img_1} className="ImgMainStyle" />
      <div className="ImgMainLetterBox_1 WhiteWord ImgMain_1_Title">
        2023 1학기 신입 부원 모집
      </div>
      <GoToApply top="866px" />
    </div>
  );
};

export default ImgMain_1;
