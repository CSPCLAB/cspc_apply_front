import React from "react";

import "../../../IntroducePage/components/styles/Introduce.css";

import Banner from "../../../../components/Layouts/Banner";
import {Culture,Mobile_Culture} from "./Culture";
import {ApplyProgress,Mobile_ApplyProgress} from "components/ApplyProgress";

import "bootstrap/dist/css/bootstrap.min.css";

const ApplyGuide = () => {
  return (
    <>
      {/* <Banner title="지원안내" />" */}
      <Culture />
      <ApplyProgress />
    </>
  );
};

const Mobile_ApplyGuide = () => {
  return (
    <>
      {/* <Banner title="지원안내" />" */}
      <Mobile_Culture />
      <Mobile_ApplyProgress />
    </>
  );
};

export {ApplyGuide, Mobile_ApplyGuide};
