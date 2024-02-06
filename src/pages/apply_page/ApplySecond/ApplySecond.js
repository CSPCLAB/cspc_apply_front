import React from "react";

import WriteApplication from "../Components/WriteApplication";
import ExistenceApplication from "./ExistenceApplication";

const ApplySecond = ({ setPage, updateTime }) => {
  return (
    <div>
      <WriteApplication />
      <ExistenceApplication setPage={setPage} updateTime={updateTime} />
    </div>
  );
};

export default ApplySecond;
