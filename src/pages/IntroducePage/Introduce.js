import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Introduce.css";

import Info from "./components/Info";
import Benefit from "./components/Benefit";
import Elite from "./components/Elite";
import ImgIntroduce from "./components/ImgIntroduce";

import ApplyCard from "../../components/ApplyCard";

// import Banner from "../../components/Layouts/Banner";

const Introduce = () => {
  return (
    <>
      {/* <Banner title="소개" /> */}

      <Info />
      <Benefit />
      <Elite />
      <ImgIntroduce />
      <ApplyCard />
    </>
  );
};

export default Introduce;
