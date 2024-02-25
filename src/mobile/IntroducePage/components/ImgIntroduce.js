import React, { useState, useEffect } from "react";

import "./styles/Introduce.css";
import "./styles/ImgIntroduce.css";
// images
import imgPicnic from "../../../assets/images/doing/picnic.png";
import imgHaek from "../../../assets/images/doing/haek.png";
import imgMt from "../../../assets/images/doing/mt3.png";
import imgParty from "../../../assets/images/doing/x-mas.png";
import imgSemina from "../../../assets/images/doing/semina.jpg";
import imgFoood from "../../../assets/images/doing/foood.jpg";
import imgislang1 from "../../../assets/images/doing/ilsang1.png";
import imgislang2 from "../../../assets/images/doing/ilsang2.png";
import imgislang3 from "../../../assets/images/doing/ilsang3.png";
import imgislang4 from "../../../assets/images/doing/ilsang4.png";
import imgislang5 from "../../../assets/images/doing/ilsang5.png";

import { Container, Row, Col } from "react-bootstrap";

const ImgIntroduce = () => {
  const images = [
    imgPicnic,
    imgHaek,
    imgMt,
    imgParty,
    imgSemina,
    imgFoood,
    imgislang1,
    imgislang2,
    imgislang3,
    imgislang4,
    imgislang5,
  ];
  const sentences = [
    "봄, 가을마다 함께 떠나는 소풍",
    "함께 밤 새면서 달리는 해커톤",
    "방학에 함께 떠나는 MT",
    "선후배가 함께 모여 이야기하는 크파",
    "선배들에게 듣는 유익한 꿀팁 세미나",
    "든든한 예산으로 맛있는 회식",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
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
      <Row>
        <Col>
          <img className="picture_" src={images[currentIndex]} />
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <div className="detail_">{sentences[currentIndex]}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImgIntroduce;
