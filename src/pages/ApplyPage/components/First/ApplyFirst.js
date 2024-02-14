import React from "react";

// components
import WriteApplication from "../WriteApplication";
import Steps from "../Steps";
import AgreePrivacy from "./AgreePrivacy";

const ApplyFirst = ({ setPage }) => {
  return (
    <div>
      <WriteApplication />
      <Steps agree={1} write={0} apply={0} />
      <AgreePrivacy setPage={setPage} />
    </div>
  );
};

export default ApplyFirst;
