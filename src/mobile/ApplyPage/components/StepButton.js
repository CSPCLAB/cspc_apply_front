import React from "react";
import { isBrowser, isMobile } from "react-device-detect";

// selected
// 0: 하얀배경 검은글씨
// 1: 검은배경 하얀글씨
// 2: 하얀배경 회색글씨
const StepButton = ({ selected, children }) => {
  if (isBrowser) {
    switch (selected) {
      case 0:
        return <div className="StepButton UnSelected">{children}</div>;
      case 1:
        return <div className="StepButton Selected">{children}</div>;
      case 2:
        return <div className="StepButton passed">{children}</div>;
    }
  } else if (isMobile) {
    switch (selected) {
      case 0:
        return <div className="MobileStepButton UnSelected">{children}</div>;
      case 1:
        return <div className="MobileStepButton Selected">{children}</div>;
      case 2:
        return <div className="MobileStepButton passed">{children}</div>;
    }
  }
};

export default StepButton;
