import React from "react";
import { useState } from "react";

import "./styles/Components.css";

import StepButton from "./StepButton";
import { isBrowser, isMobile } from "react-device-detect";

const Steps = ({ agree, write, apply }) => {
  return (
    <div className="StepStyle">
      <StepButton selected={agree} children="개인정보 동의" />
      <StepButton selected={write} children="지원서 작성" />
      <StepButton selected={apply} children="제출" />
    </div>
  );
};

export default Steps;
