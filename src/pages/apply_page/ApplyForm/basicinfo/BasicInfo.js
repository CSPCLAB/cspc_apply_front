import React, { useState } from "react";

import RequiredName from "./components/RequiredName";
import RequiredPhone from "./components/RequiredPhone";
import RequiredStudentId from "./components/RequiredStudentId";
import RequiredSemester from "./components/RequiredSemester";

import "./BasicInfo.css";

const BasicInfo = ({
  contents = { contents },
  setContent = { setContent },
}) => {
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent({
      ...contents,
      [name]: value,
    });
  };

  return (
    <div className="basicInfo">
      <RequiredName info={contents.name} onChange={onChange} />
      <RequiredPhone info={contents.phone} onChange={onChange} />
      {/*  학번 어떻게 가져오는건지?  */}
      {/*
            <RequiredStudentId info={contents.studentId} onChange={onChange}/>
            */}
      <RequiredSemester info={contents.semester} onChange={onChange} />
    </div>
  );
};

export default BasicInfo;
