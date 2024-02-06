import React from "react";
import { Link } from "react-router-dom";

import Apply from "../../apply_page/Apply";

import "../Main.css";

const GoToApply = ({ top, left }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
      }}
    >
      <Link to="/login">
        <button className="ButtonStyle">지원하기</button>
      </Link>
    </div>
  );
};

export default GoToApply;
