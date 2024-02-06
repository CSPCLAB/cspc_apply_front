import React from "react";
import "../../doing_page/Introduce.css";
import ApplyGuide_1 from "./applyGuide_1/ApplyGuide_1";
import ApplyGuide_2 from "./applyGuide_2/ApplyGuide_2";

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
