import React from "react";

import img_2 from "../components/img/main_img_2.png";

import "../Main.css";

const ImgMain_2 = () => {
  return (
    <div
      className="main"
      style={{
        height: "1005px",

        textAlign: "center",
        position: "relative",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",

          width: "1920px",
          height: "1005px",
          background: "black",
        }}
      >
        <div
          style={{
            position: "relative",

            color: "#ffffff",

            fontWeight: 700,
            fontSize: "30px",
            lineHeight: "150%",
          }}
        >
          <div
            className="WhiteWord"
            style={{
              position: "absolute",

              top: "444px",
              left: "310px",
            }}
          >
            CSPCLAB은
          </div>
          <div
            style={{
              position: "absolute",

              top: "494px",
              left: "310px",

              width: 500,
              height: 50,

              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className="BlueWord"
              style={{
                position: "relative",
              }}
            >
              소수정예
            </div>
            <div
              className="WhiteWord"
              style={{
                position: "relative",
              }}
            >
              를 지향하는
            </div>
          </div>
          <div
            className="WhiteWord"
            style={{
              position: "absolute",

              top: "544px",
              left: "310px",
            }}
          >
            서강대학교 컴퓨터공학과 학회입니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgMain_2;
