import React from "react";
import "./FlyingButton.css";
import { Outlet } from "react-router-dom";

const FlyingButton = () => {
  return (
    <>
      <button className="FlyingButton">Apply</button>
      <Outlet />
    </>
  );
};

export default FlyingButton;
