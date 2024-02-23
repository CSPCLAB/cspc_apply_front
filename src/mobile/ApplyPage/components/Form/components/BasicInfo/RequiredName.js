import React from "react";

import "../styles/Required.css";

import star from "../../../../../../assets/images/apply/requiredInput.png";

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
