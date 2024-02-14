import React from "react";

// components
import ImgMain from "./components/ImgMain/ImgMain";
import IntroduceMain from "./components/IntroduceMain";
// import MainApplyCard from "./components/MainApplyCard";

import ApplyCard from "../../components/ApplyCard";

const Main = () => {
  return (
    <>
      <ImgMain />
      <IntroduceMain />
      {/* <MainApplyCard /> */}
      <ApplyCard />
    </>
  );
};

export default Main;
