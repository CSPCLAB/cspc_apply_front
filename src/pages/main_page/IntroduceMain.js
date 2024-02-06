import React from "react";
import "./Main.css";

// image
import img_picnic from "./components/img/main_img_picnic.png";
import img_mt from "./components/img/main_img_mt.png";
import img_party from "./components/img/main_img_party.png";

const IntroduceMain = () => {
  return (
    <div
      className="main"
      style={{
        textAlign: "left",
      }}
    >
      <div
        style={{
          paddingTop: "167px",
          width: "1300px",
        }}
      >
        <div
          className="letterStyle_5"
          style={{
            paddingLeft: "50px",
          }}
        >
          소수라서 더 끈끈한
        </div>

        <div
          className="main"
          style={{
            textAlign: "center",
          }}
        >
          <div className="IntroduceStyle">
            <img
              src={img_picnic}
              className="ImgIntroduceStyle"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div
              className="letterStyle_6"
              style={{
                position: "absolute",
                top: 380,
                left: 0,
              }}
            >
              소풍
            </div>
          </div>
          <div className="IntroduceStyle">
            <img
              src={img_mt}
              className="ImgIntroduceStyle"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div
              className="letterStyle_6"
              style={{
                position: "absolute",
                top: 380,
                left: 0,
              }}
            >
              MT
            </div>
          </div>
          <div className="IntroduceStyle">
            <img
              src={img_party}
              className="ImgIntroduceStyle"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <div
              className="letterStyle_6"
              style={{
                position: "absolute",
                top: 380,
                left: 0,
              }}
            >
              크리스마스 파티
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceMain;
