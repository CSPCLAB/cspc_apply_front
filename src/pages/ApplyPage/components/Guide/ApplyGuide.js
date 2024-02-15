import React from "react";

import "../../../IntroducePage/components/styles/Introduce.css";

import Banner from "../../../../components/Layouts/Banner";
import Culture from "./Culture";
import ApplyProgress from "components/ApplyProgress";

import ApplyGuide_2 from "./ApplyGuide_2";

const ApplyGuide = () => {
  return (
    <>
      <Banner title="지원안내" />"
      <Culture />
      {/* <ApplyGuide_2 /> */}
      <ApplyProgress />
    </>
  );
};

export default ApplyGuide;
