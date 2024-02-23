import React from "react";
import { useState } from "react";
import { useAsync } from "react-async";
import dateFormat, { masks } from "dateformat";

import { interview } from "../../../../../../apis/interview";

import "../styles/TimeTable.css";

import CheckBox from "./CheckBox";
import { isBrowser, isMobile } from "react-device-detect";

const TimeTable = ({ contents, setContent }) => {
  const { data, error, isLoading } = useAsync({ promiseFn: interview }, []);

  const [timeIndex, setTimeIndex] = useState(contents.interview_time_choice);

  // const timeIndex = contents.interview_time_choice;

  const printTime = (time) => {
    const hour = dateFormat(time, "h");
    const endHour = Number(hour) + 1;

    return <>{dateFormat(time, "m월 dd일 오후 h시 ~ ") + endHour + "시"}</>;
  };

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (isBrowser) {
      return (
        <div className="TimeTable">
          {data.map((time, index) => (
            <div key={time.id} className="TimeTableBox">
              {index % 3 == 2 && index != data.length - 1 ? (
                <div className="smallLine Line" />
              ) : null}
              <CheckBox
                contents={contents}
                setContent={setContent}
                id={time.id}
                isChecked={String(timeIndex).includes(time.id)}
                timeIndex={timeIndex}
                setTimeIndex={setTimeIndex}
              />
              <div className="TimeTableWord">{printTime(time.time)}</div>
            </div>
          ))}
        </div>
      );
    } else if (isMobile) {
      return (
        <div className="MobileTimeTable">
          {data.map((time, index) => (
            <div key={time.id} className="MobileTimeTableBox">
              {index % 3 == 2 && index != data.length - 1 ? (
                <div className="smallLine Line" />
              ) : null}
              <CheckBox
                contents={contents}
                setContent={setContent}
                id={time.id}
                isChecked={String(timeIndex).includes(time.id)}
                timeIndex={timeIndex}
                setTimeIndex={setTimeIndex}
              />
              <div className="MobileTimeTableWord">{printTime(time.time)}</div>
            </div>
          ))}
        </div>
      );
    }
  }
};

export default TimeTable;
