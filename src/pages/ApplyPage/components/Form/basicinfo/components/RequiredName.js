import React from "react";

import "./Required.css";

import star from "../requiredInput.png";

const RequiredName = ({ info, onChange }) => {
  return (
    <div className="RequiredInput">
      <div className="RequiredQuestion">
        이름
        <img src={star} className="star" />
      </div>
      <div>
        <input
          className="InputWindow NamePhone"
          name="name"
          value={info}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default RequiredName;
