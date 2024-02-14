import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
