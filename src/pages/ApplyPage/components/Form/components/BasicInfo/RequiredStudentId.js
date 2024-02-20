import React from "react";

import "../styles/Required.css";

import star from "../../../../../../assets/images/apply/requiredInput.png";

const RequiredStudentId = ({ userStudentId }) => {
  return (
    <div className="RequiredInput">
      <div className="RequiredQuestion">
        학번
        <img src={star} className="star" />
      </div>
      <div>
        <div>
          {/* 학번 값은 로그인할 때 가져와서 고정 */}
          <input className="InputWindow studentId" value="00"></input>
          학번
        </div>
      </div>
    </div>
  );
};

export default RequiredStudentId;
