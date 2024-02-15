import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/Banner.css";

const Banner = ({ title }) => {
  return (
    <>
      <div className="applyBanner">
        <div className="applyBannerBox">
          <div className="applyWordBanner">{title}</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Banner;
