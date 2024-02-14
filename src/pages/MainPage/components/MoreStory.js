import React from "react";
import { Link } from "react-router-dom";

import "./styles/MoreStory.css";

const MoreStory = () => {
  return (
    <div className="MoreStory">
      <Link to="/introduce">
        <button className="MoreStoryButton">더 많은 이야기 +</button>
      </Link>
    </div>
  );
};

export default MoreStory;
