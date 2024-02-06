import React from "react";

import img_1 from "../components/img/main_img_1.png";

import GoToApply from "../components/GoToApply";

import "../Main.css";

const ImgMain_1 = () => {
  return (
    <div className="main">
      <img src={img_1} className="ImgMainStyle" />
      <div
        className="letterStyle_1"
        style={{
          top: "805px",
          color: "white",
        }}
      >
        2023 1학기 신입 부원 모집
      </div>
      <GoToApply top="866px" />
    </div>
  );
};

export default ImgMain_1;
