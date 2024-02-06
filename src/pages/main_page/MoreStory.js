import React from "react";
import { Link } from "react-router-dom";

import "./Main.css";

const MoreStory = () => {
  return (
    <div
      className="main"
      style={{
        background: "white",
        height: "185.33px",
        position: "relative",
      }}
    >
      <Link to="/introduce">
        <button className="ButtonStyle_2">더 많은 이야기+</button>
      </Link>
    </div>
  );
};

export default MoreStory;
