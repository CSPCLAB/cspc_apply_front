import React from "react";

import "./styles/Introduce.css";
import "./styles/Benefit.css";

import bookmark from "../../../assets/images/doing/bookmark.png";
import desktop from "../../../assets/images/doing/desktop.png";
import mapPin from "../../../assets/images/doing/map-pin.png";

const Benefit = () => {
  return (
    <div className="iconsFrame_">
      <div className="icon_ n1_">
        <img className="icon1_" src={bookmark} />
        <div className="icon2_">공용 전공 서적</div>
        <div className="icon3_">
          <ul>
            <li>전공 서적 신청 가능</li>
            <li>언제든지 사용 가능</li>
          </ul>
        </div>
      </div>

      <div className="icon_ n2_">
        <img className="icon1_" src={desktop} />
        <div className="icon2_">서버 제공</div>
        <div className="icon3_">
          <ul>
            <li>고사양 GPU 컴퓨터</li>
            <li>랩원 전용 리눅스 서버</li>
          </ul>
        </div>
      </div>

      <div className="icon_ n3_">
        <img className="icon1_" src={mapPin} />
        <div className="icon2_">관리자실</div>
        <div className="icon3_">
          <ul>
            <li>공강 시간이든 언제든 사용 가능</li>
            <li>개인 사물함 제공</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
