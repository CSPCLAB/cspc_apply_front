import React from "react";

import "../../../IntroducePage/components/styles/Introduce.css";

import Banner from "../../../../components/Layouts/Banner";
import Culture from "./Culture";
import ApplyProgress from "components/ApplyProgress";

const ApplyGuide = () => {
  return (
    <>
      {/* <Banner title="지원안내" />" */}
      <Culture />
      <ApplyProgress />
    </>
  );
};

export default ApplyGuide;
