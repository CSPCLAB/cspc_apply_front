import React from "react";

import WriteApplication from "../WriteApplication";
import Steps from "../Steps";
import CompleteMessage from "./CompleteMessage";

const ApplyComplete = () => {
  return (
    <div>
      <WriteApplication />
      <Steps agree={2} write={2} apply={1} />
      <CompleteMessage />
    </div>
  );
};

export default ApplyComplete;
