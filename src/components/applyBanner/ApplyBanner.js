import React from "react";
import { Outlet } from "react-router-dom";

import "./ApplyBanner.css";

const ApplyBanner = () => {
  return (
    <>
      <div className="applyBanner">
        <div className="applyBannerBox">
          <div className="applyWordBanner">지원하기</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ApplyBanner;
