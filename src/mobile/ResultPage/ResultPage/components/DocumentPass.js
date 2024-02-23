import React, { useState } from "react";
import "./styles/DocumentPass.css";

import { Row, Col } from "react-bootstrap";

import imgMap from "../../../../assets/images/result/map.png";
import imgSpot from "../../../../assets/images/result/map-marker-Filled.png";

import dateFormat from "dateformat";

const Doc_result_pass = ({ resume }) => {
  const [showMap, setShowMap] = useState(false);

  const format = "m월 dd일 오후 h시 MM분";

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  const mapContainerStyle = {
    display: showMap ? "block" : "none", // 지도를 표시할지 결정하는 스타일
  };

  return (
    <div className="black_">
      <div className="pass__resultbox_">
        <div className="pass__resultlen_">서류결과</div>
      </div>
      <div className="pass__line_"></div>
      <div className="pass__resultbox2_">
        <div className="pass__resultlen1_">{resume.name} 님 축하드립니다!</div>
        <div className="pass__resultlen2_">
          서류에 합격하셨습니다.
          <br />
          함께 하기까지 한 단계, 면접 전형이 남아 있습니다.
          <br />
          전형 진행을 위해 면접 일정 및 장소를 안내드립니다.
          <br />
        </div>
        <div className="pass__resultlen3_">면접 안내</div>
        <div className="pass__resultlen4_">
          면접 시간은 <b>{dateFormat(resume.fixed_interview_time, format)}</b>
          입니다.
          <br />
          면접 시간에 맞춰 <b>{resume.interview_place}</b>로 와주세요.
          <br />
          문의사항이 있으시다면 아래 이메일로 문의해주세요.
          <br />
        </div>
        <div className="pass__picline_">
          <Col>
            <Row>
              <img
                src={"https://dev.cspc.me/media/result_map_M8FldVt.png"}
                alt="Map"
                // style={{ maxWidth: "100%", height: "auto" }}
              />
            </Row>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Doc_result_pass;
