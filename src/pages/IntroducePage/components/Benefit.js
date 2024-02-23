import React from "react";

import "./styles/Introduce.css";
import "./styles/Benefit.css";

import bookmark from "../../../assets/images/doing/bookmark.png";
import desktop from "../../../assets/images/doing/desktop.png";
import mapPin from "../../../assets/images/doing/map-pin.png";

const Benefit = () => {
  return (
    <div className="main">
      <div className="iconsMain">
        <div className="iconsFrame">
          <div className="icon n1">
            <img
              className="icon1"
              src={"https://dev.cspc.me/media/intro_bookmark.png"}
            />
            <div className="icon2">공용 전공 서적</div>
            <div className="icon3">
              <ul>
                <li>전공 서적 신청 가능</li>
                <li>언제든지 사용 가능</li>
              </ul>
            </div>
          </div>

          <div className="icon n2">
            <img
              className="icon1"
              src={"https://dev.cspc.me/media/intro_desktop.png"}
            />
            <div className="icon2">서버 제공</div>
            <div className="icon3">
              <ul>
                <li>고사양 GPU 컴퓨터</li>
                <li>랩원 전용 리눅스 서버</li>
              </ul>
            </div>
          </div>

          <div className="icon n3">
            <img
              className="icon1"
              src={"https://dev.cspc.me/media/intro_map-pin.png"}
            />
            <div className="icon2">관리자실</div>
            <div className="icon3">
              <ul>
                <li>공강 시간이든 언제든 사용 가능</li>
                <li>개인 사물함 제공</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
