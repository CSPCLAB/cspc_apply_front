import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  var title = "title";

  return (
    <>
      <Header />
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
