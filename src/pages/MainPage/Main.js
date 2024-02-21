import React from "react";

// components
import ImgMain from "./components/ImgMain/ImgMain";
import IntroduceMain from "./components/IntroduceMain";
import ApplyCard from "../../components/ApplyCard";

import { Container, Row, Col } from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";

const Main = () => {
  return (
    <>
      <ImgMain />
      <IntroduceMain />
      <ApplyCard />
    </>
  );
};

export default Main;
