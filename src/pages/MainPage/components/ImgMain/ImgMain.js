import React from "react";

import FirstImg from "./FirstImg";
import SecondImg from "./SecondImg";
import ThirdImg from "./ThirdImg";

import "../styles/ImgMain.css";

const ImgMain = () => {
  return (
    <div className="ImgMain">
      <FirstImg />
      <SecondImg />
      <ThirdImg />
    </div>
  );
};

export default ImgMain;
