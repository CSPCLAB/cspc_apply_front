import React from "react";

import "../styles/InputBox.css";
import { isBrowser, isMobile } from "react-device-detect";

const InputBox = ({ info, setContent, onChange, title, max }) => {
  if (isBrowser) {
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
  } else if (isMobile) {
    return (
      <>
        <textarea
          id={title}
          className="MobileInputBox"
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
  }
};

export default InputBox;
