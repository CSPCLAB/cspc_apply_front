import React from "react";

import "../../../IntroducePage/components/styles/Introduce.css";

import ApplyGuide_1 from "./ApplyGuide_1";
import ApplyGuide_2 from "./ApplyGuide_2";

const ApplyGuide = () => {
  return (
    <>
      <div className="introducebanner">
        <div className="bannerTitle">지원안내</div>
      </div>
      <ApplyGuide_1 />
      <ApplyGuide_2 />
    </>
  );
};

export default ApplyGuide;
