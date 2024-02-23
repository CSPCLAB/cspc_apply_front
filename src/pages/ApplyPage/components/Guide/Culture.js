import React from "react";
import { useState, useEffect } from "react";

import "../styles/Culture.css";
import "../styles/ApplyGuide.css";

import guide1 from "../../../../assets/images/applyGuide/guide1.png";
import guide2 from "../../../../assets/images/applyGuide/guide2.png";
import guide3 from "../../../../assets/images/applyGuide/guide3.png";
import guide4 from "../../../../assets/images/applyGuide/guide4.png";
import guide5 from "../../../../assets/images/applyGuide/guide5.png";
import guide6 from "../../../../assets/images/applyGuide/guide6.png";
import { Container, Row, Col } from "react-bootstrap";

const Culture = () => {
  return (
    <div className="base">
      <div className="humanForm">
        <div className="cspcCul">CSPC 문화</div>
        <div className="cspcIntro">CSPC는 이런 분들과 잘 어울립니다.</div>
        <div className="SepLine"></div>

        <div className="Line1">
          <div className="Line1_1">
            <img
              className="img1"
              src={"https://dev.cspc.me/media/applyguide_1.png"}
            />
            <div className="sen1">좁고 깊은 관계를 추구하는 사람</div>
          </div>
          <div className="Line1_2">
            <img
              className="img1"
              src={"https://dev.cspc.me/media/applyguide_2.png"}
            />
            <div className="sen1 white">할 땐 하고 놀 땐 노는 사람</div>
          </div>
          <div className="Line1_3">
            <img
              className="img1"
              src={"https://dev.cspc.me/media/applyguide_3.png"}
            />
            <div className="sen1">랩실에 자주 나올 수 있는 사람</div>
          </div>
        </div>

        <div className="Line2">
          <div className="Line2_1">
            <img
              className="img2"
              src={"https://dev.cspc.me/media/applyguide_4.png"}
            />
            <div className="sen1 white">같이 눈사람 만들어 줄 사람</div>
          </div>
          <div className="Line2_2">
            <img
              className="img2"
              src={"https://dev.cspc.me/media/applyguide_5.png"}
            />
            <div className="sen1">배우고자 하는 의지가 있는 사람</div>
          </div>
          <div className="Line2_3">
            <img
              className="img2"
              src={"https://dev.cspc.me/media/applyguide_6.png"}
            />
            <div className="sen1 white">이걸 모두 읽고 있는 당신</div>
          </div>
        </div>
        {/*
        <div className='Line1 Line2'></div>
  */}
      </div>
    </div>
  );
};

const Mobile_Culture = () => {
  // 이미지와 문구 정보
  const images = [guide1, guide2, guide3, guide4, guide5, guide6];
  const sentences = [
    "좁고 깊은 관계를 추구하는 사람",
    "할 땐 하고 놀 땐 노는 사람",
    "랩실에 자주 나올 수 있는 사람",
    "같이 눈사람 만들어 줄 사람",
    "배우고자 하는 의지가 있는 사람",
    "이걸 모두 읽고 있는 당신",
  ];

  // 현재 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이미지와 문구를 변경하는 함수
  const changeContent = () => {
    // 다음 인덱스로 이동
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 일정한 시간 간격으로 이미지와 문구 변경
  useEffect(() => {
    const intervalId = setInterval(changeContent, 3000); // 3초마다 변경되도록 설정 (3000은 밀리초 단위)

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌 클리어
    };
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col className="M_cspcCul">CSPC 문화</Col>
      </Row>
      <Row className="mt-1">
        <Col className="M_cspcIntro">CSPC는 이런 분들과 잘 어울립니다.</Col>
      </Row>
      <Row className="mt-3">
        <Col className="M_SepLine"></Col>
      </Row>

      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="M_Line1_1 d-flex flex-column justify-content-center align-items-center">
            <img
              className="M_img1"
              src={images[currentIndex]}
              style={{ marginBottom: "15vw" }}
            />
            <div className="M_sen1" style={{ marginTop: "-8vw" }}>
              {sentences[currentIndex]}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { Culture, Mobile_Culture };
