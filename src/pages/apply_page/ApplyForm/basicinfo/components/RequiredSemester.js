import React from "react";

import "./Required.css";

import star from "../requiredInput.png";

const RequiredSemester = ({ info, onChange }) => {
  return (
    <div className="RequiredInput">
      <div className="RequiredQuestion">
        학기
        <img src={star} className="star" />
      </div>
      <div>
        <div className="directionRow">
          {/*
                    <input
                        className="InputWindow semester"
                        name="semester"
                        value={info}
                        onChange={onChange}
                        type="number" 
                        min='0'
                        max='5'
                    >
                    </input>
    */}
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
          <div className="SemesterStandard">(2023년 3월 기준)</div>
        </div>
      </div>
    </div>
  );
};

export default RequiredSemester;
