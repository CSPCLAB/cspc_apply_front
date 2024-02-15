import React from "react";

import "../styles/Culture.css";
import "../styles/ApplyGuide.css";

import guide1 from "../../../../assets/images/applyGuide/guide1.png";
import guide2 from "../../../../assets/images/applyGuide/guide2.png";
import guide3 from "../../../../assets/images/applyGuide/guide3.png";
import guide4 from "../../../../assets/images/applyGuide/guide4.png";
import guide5 from "../../../../assets/images/applyGuide/guide5.png";
import guide6 from "../../../../assets/images/applyGuide/guide6.png";

const Culture = () => {
  return (
    <div className="base">
      <div className="humanForm">
        <div className="cspcCul">CSPC 문화</div>
        <div className="cspcIntro">CSPC는 이런 분들과 잘 어울립니다.</div>
        <div className="SepLine"></div>
        <div className="Line1">
          <div className="Line1_1">
            <img className="img1" src={guide1} />
            <div className="sen1">좁고 깊은 관계를 추구하는 사람</div>
          </div>
          <div className="Line1_2">
            <img className="img1" src={guide2} />
            <div className="sen1 white">할 땐 하고 놀 땐 노는 사람</div>
          </div>
          <div className="Line1_3">
            <img className="img1" src={guide3} />
            <div className="sen1">랩실에 자주 나올 수 있는 사람</div>
          </div>
        </div>

        <div className="Line2">
          <div className="Line2_1">
            <img className="img2" src={guide4} />
            <div className="sen1 white">같이 눈사람 만들어 줄 사람</div>
          </div>
          <div className="Line2_2">
            <img className="img2" src={guide5} />
            <div className="sen1">배우고자 하는 의지가 있는 사람</div>
          </div>
          <div className="Line2_3">
            <img className="img2" src={guide6} />
            <div className="sen1 white">이걸 모두 읽고 있는 당신</div>
          </div>
        </div>
        {/*
        <div className='Line1 Line2'></div>
  */}
      </div>
    </div>
  );
};

export default Culture;
