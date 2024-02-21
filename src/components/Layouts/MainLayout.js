import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";

const MainLayout = () => {
  var title = "title";

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <Outlet />
      </Container>
      {/* <Outlet /> */}
      <Footer />
    </>
  );
};

export default MainLayout;
