import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Introduce.css";

import Info from "./components/Info";
import Benefit from "./components/Benefit";
import Elite from "./components/Elite";
import ImgIntroduce from "./components/ImgIntroduce";

import ApplyCard from "../../components/ApplyCard";

const Introduce = () => {
  return (
    <>
      <div className="introducebanner">
        <div className="bannerTitle">소개</div>
      </div>

      <Info />
      <Benefit />
      <Elite />
      <ImgIntroduce />
      <ApplyCard />
    </>
  );
};

export default Introduce;
