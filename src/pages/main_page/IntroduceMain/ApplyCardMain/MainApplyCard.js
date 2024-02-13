import React from "react";

import img from "../../components/img/main_apply_img.png";

import GoToApply from "../../components/GoToApply";

import "./MainApplyCard.css";

const MainApplyCard = () => {
  return (
    <div className="MainApplyCard">
      <div className="MainApplyCardBox">
        <img src={img} className="MainApplyCardImg" />
        <div className="MainApplyCardLetterBox WhiteWord">
          2024 1학기 신입부원 모집
        </div>
        <GoToApply top="169px" left="1042px" />
      </div>
    </div>
  );
};

export default MainApplyCard;
