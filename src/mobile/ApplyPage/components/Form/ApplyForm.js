import React from "react";

import axios from "axios";

import WriteApplication from "../WriteApplication";
import Steps from "../Steps";
import BasicInfo from "./components/BasicInfo/BasicInfo";
import CoverLetter from "./components/CoverLetter/CoverLetter";
import InterviewTime from "./components/InterviewTime/InterviewTime";

const ApplyForm = ({ contents, setContent, uploadContent }) => {
  return (
    <div>
      <WriteApplication />
      <Steps agree={2} write={1} apply={0} />
      <BasicInfo contents={contents} setContent={setContent} />
      <CoverLetter contents={contents} setContent={setContent} />
      <InterviewTime
        contents={contents}
        setContent={setContent}
        uploadContent={uploadContent}
      />
    </div>
  );
};

export default ApplyForm;
