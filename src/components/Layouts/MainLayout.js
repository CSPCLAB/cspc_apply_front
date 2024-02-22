import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import { isBrowser, isMobile } from "react-device-detect";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
