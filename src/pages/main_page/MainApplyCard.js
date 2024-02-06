import React from "react";

import img from "./components/img/main_apply_img.png";

import GoToApply from "./components/GoToApply";

import "./Main.css";

const MainApplyCard = () => {
  return (
    <div className="main">
      <div
        style={{
          textAlign: "center",
          position: "relative",

          textAlign: "left",
        }}
      >
        <img
          src={img}
          style={{
            position: "relative",
            width: "1300px",
            height: "258px",

            borderRadius: "15px",
          }}
        />
        <div
          className="letterStyle_3"
          style={{
            top: "70px",
            left: "65px",
          }}
        >
          2023 1학기 신입 부원 모집
        </div>
        <GoToApply top="169px" left="1042px" />
      </div>
    </div>
  );
};

export default MainApplyCard;
