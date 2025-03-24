import React from "react";
import "./styles/DocumentPass.css";

import imgMap from "../../../assets/images/result/map.png";
import imgSpot from "../../../assets/images/result/map-marker-Filled.png";

import dateFormat, { masks } from "dateformat";

const Doc_result_pass = ({ resume }) => {
  const format = "m월 dd일 오후 h시 MM분";
  return (
    <div className="black">
      <div className="pass__resultbox">
        <div className="pass__resultlen">서류결과</div>
      </div>
      <div className="pass__line"></div>
      <div className="pass__resultbox2">
        <div className="pass__resultlen1">{resume.name} 님 축하드립니다!</div>
        <div className="pass__resultlen2">
          서류에 합격하셨습니다.
          <br />
          함께 하기까지 한 단계, 면접 전형이 남아 있습니다.
          <br />
          전형 진행을 위해 면접 일정 및 장소를 안내드립니다.
          <br />
        </div>
        <div className="pass__resultlen3">면접 안내</div>
        <div className="pass__resultlen4">
          면접 시간은 <b>{dateFormat(resume.fixed_interview_time, format)}</b>
          입니다.
          <br />
          면접 시간에 맞춰 <b>{resume.interview_place}</b>로 와주세요.
          <br />
          문의사항이 있으시다면 아래 이메일로 문의해주세요.
          <br />
        </div>
        <div className="pass__picline">
          <img src={imgMap} />
        </div>
      </div>
    </div>
  );
};

export default Doc_result_pass;
