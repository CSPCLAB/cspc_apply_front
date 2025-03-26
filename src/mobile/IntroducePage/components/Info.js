import React from "react";

import "./styles/Introduce.css";
import "./styles/Info.css";

const Info = () => {
  return (
    <div className="mainForm1_">
      <div className="mainForm2_">
        <div className="form_">
          <div className="introduce1-1_">랩실 관리</div>
          <div className="introduce1-2_">CSPC는 실습실을 관리합니다.</div>
          <div className="introduce1-3_">
            <div>
              CSPC LAB이 관리하는 실습실은 다산관 104, 105호에 위치하고
              있습니다.
            </div>
            <div>
              실습수업이 원활하게 이루어질 수 있도록 수업 중 관리자실에서
              대기하며, 수업에 필요한 장비 대여나, 랩실 보안 및 청결을
              유지합니다.
            </div>
          </div>
        </div>
        <div className="form_ second_">
          <div className="line1_"></div>
          <div className="introduce2-1_">스터디 / 프로젝트</div>
          <div className="introduce2-2_">
            CSPC는 스터디와 프로젝트를 응원합니다.
          </div>
          <div className="introduce2-3_">
            <div>
              언제든 마음 맞는 친구와 함께, 같이 듣는 과목이나 함께 배우고 싶은
              것 무엇에 관해서든 스터디/프로젝트를 열 수 있습니다.
            </div>
            <p>스터디/프로젝트 장려를 위해 지원금의 형태로도 서포트합니다.</p>
          </div>
        </div>

        <div className="form_ third_">
          <div className="line2_"></div>
          <div className="introduce3-1_">선배 찬스</div>
          <div className="introduce3-2_">CSPC는 선배들이 있어 든든합니다.</div>
          <div className="introduce3-3_">
            <div>
              CSPC LAB은 1993년에 창설되어 다양한 분야로 진출한 선배들이
              많습니다.
            </div>
            <div>졸업한 선배로부터 진로에 대한 조언을 듣거나,</div>
            <p>재학 중인 선배들에게도 대학 생활 팁을 얻을 수 있습니다.</p>
          </div>
          <div className="line3_"></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
