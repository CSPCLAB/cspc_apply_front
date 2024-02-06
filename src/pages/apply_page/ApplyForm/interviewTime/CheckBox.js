import React from "react";
import { useState } from "react";

import "./TimeTable.css";

const CheckBox = ({
  contents,
  setContent,
  id,
  isChecked,
  timeIndex,
  setTimeIndex,
}) => {
  const changeChecked = ({ id }) => {
    if (isChecked === true) {
      setTimeIndex(timeIndex.filter((index) => index !== id));
      setContent({
        ...contents,
        interview_time_choice: contents.interview_time_choice.filter(
          (index) => index !== id,
        ),
      });
    } else {
      if (contents.interview_time_choice.length === 0) {
        setTimeIndex([id]);
        setContent({
          ...contents,
          interview_time_choice: [id],
        });
      } else {
        setTimeIndex(new Array(...timeIndex, id));
        setContent({
          ...contents,
          interview_time_choice: new Array(
            ...contents.interview_time_choice,
            id,
          ),
        });
      }
    }
    isChecked = !isChecked;
  };

  if (isChecked)
    return (
      <button
        id={id}
        className="TimeTableButton checkedButton"
        onClick={() => changeChecked({ id })}
      />
    );
  else
    return (
      <button
        id={id}
        className="TimeTableButton unCheckedButton"
        onClick={() => changeChecked({ id })}
      />
    );
};

export default CheckBox;
