import React from "react";

import "../styles/InputBox.css";

const InputBox = ({ info, setContent, onChange, title, max }) => {
  return (
    <>
      <textarea
        id={title}
        className="InputBox"
        name={title}
        value={info}
        onChange={onChange}
      ></textarea>
      {max ? (
        <div>
          {info.length} / {max}
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
