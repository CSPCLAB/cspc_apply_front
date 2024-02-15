import React from "react";

import "../../../IntroducePage/components/styles/Introduce.css";

import ApplyGuide_1 from "./ApplyGuide_1";
import ApplyGuide_2 from "./ApplyGuide_2";

import Banner from "../../../../components/Banner/Banner";

const ApplyGuide = () => {
  return (
    <>
      <Banner title="지원안내" />"
      <ApplyGuide_1 />
      <ApplyGuide_2 />
    </>
  );
};

export default ApplyGuide;
