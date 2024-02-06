import React from "react";
import "../Introduce.css";
import "./Introduce_1.css";

const Introduce_1 = () => {
  return (
    <div className="main">
      <div className="mainForm1">
        <div className="mainForm2">
          <div className="form">
            <div className="introduce1-1">랩실 관리</div>
            <div className="introduce1-2">CSPC LAB은 실습실을 관리합니다.</div>
            <div className="introduce1-3">
              <div>
                CSPC LAB이 관리하는 실습실은 리치과학관 914호에 위치하고
                있습니다.
              </div>
              <p>
                실습수업이 원활하게 이루어질 수 있도록 수업 중 관리자실에서
                대기하며, 수업에 필요한 장비 대여나, 랩실 보안 및 청결을
                유지합니다.
              </p>
            </div>
            <div className="line1"></div>
          </div>

          <div className="form second">
            <div className="introduce2-1">스터디 / 프로젝트</div>
            <div className="introduce2-2">
              CSPC LAB은 스터디와 프로젝트를 응원합니다.
            </div>
            <div className="introduce2-3">
              <p>
                언제든 마음 맞는 친구와 함께, 같이 듣는 과목이나 함께 배우고
                싶은 것 무엇에 관해서든 스터디/프로젝트를 열 수 있습니다.
                스터디/프로젝트 장려를 위해 지원금의 형태로도 서포트합니다.
              </p>
            </div>
            <div className="line2"></div>
          </div>

          <div className="form third">
            <div className="introduce3-1">선배 찬스</div>
            <div className="introduce3-2">
              CSPC LAB은 선배들이 있어 든든합니다.
            </div>
            <div className="introduce3-3">
              <p>
                CSPC LAB은 1993년에 창설되어 다양한 분야로 진출한 선배들이
                많습니다. 졸업한 선배로부터 진로에 대한 조언을 듣거나, 재학 중인
                선배들에게도 대학 생활 꿀팁을 얻을 수 있습니다.
              </p>
            </div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce_1;
