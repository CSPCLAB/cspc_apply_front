import React from "react";

import "../styles/Required.css";

import star from "../../../../../../assets/images/apply/requiredInput.png";
import { isBrowser } from "react-device-detect";

const RequiredSemester = ({ info, onChange }) => {
  return (
    <div className="RequiredInput">
      <div className="RequiredQuestion">
        학기
        <img src={star} className="star" />
      </div>
      {isBrowser ? (
        <div>
          <div className="directionRow">
            <select
              className="InputWindow semester"
              name="semester"
              value={info}
              onChange={onChange}
            >
              <option value="0">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
            학기
            <div className="SemesterStandard">(2024년 3월 기준)</div>
          </div>
        </div>
      ) : (
        <div>
          <div className="directionRow">
            <select
              className="InputWindow mobileSemester"
              name="semester"
              value={info}
              onChange={onChange}
            >
              <option value="0">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
            학기
          </div>
          <div className="MobileSemesterStandard">(2024년 3월 기준)</div>
        </div>
      )}
    </div>
  );
};

export default RequiredSemester;
