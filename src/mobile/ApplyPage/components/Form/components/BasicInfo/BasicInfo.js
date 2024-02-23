import React, { useState } from "react";

import RequiredName from "./RequiredName";
import RequiredPhone from "./RequiredPhone";
import RequiredStudentId from "./RequiredStudentId";
import RequiredSemester from "./RequiredSemester";

import "../styles/BasicInfo.css";
import { isBrowser, isMobile } from "react-device-detect";

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

  if (isBrowser) {
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
  } else if (isMobile) {
    return (
      <div className="mobileBasicInfo">
        <RequiredName info={contents.name} onChange={onChange} />
        <RequiredPhone info={contents.phone} onChange={onChange} />
        {/*  학번 어떻게 가져오는건지?  */}
        {/*
            <RequiredStudentId info={contents.studentId} onChange={onChange}/>
            */}
        <RequiredSemester info={contents.semester} onChange={onChange} />
      </div>
    );
  }
};

export default BasicInfo;
