import React, { useState, useEffect } from "react";

import "./styles/Introduce.css";
import "./styles/ImgIntroduce.css";

// images
import imgPicnic from "../../../assets/images/doing/picnic.png";
import imgHaek from "../../../assets/images/doing/haek.png";
import imgMt from "../../../assets/images/doing/mt.png";
import imgParty from "../../../assets/images/doing/party.png";
import imgSemina from "../../../assets/images/doing/semina.jpg";
import imgFoood from "../../../assets/images/doing/food.jpg";
import imgLogo from "../../../assets/images/doing/cspcLogo.png";

import imgilsang1 from "../../../assets/images/doing/ilsang1.png";
import imgilsang2 from "../../../assets/images/doing/ilsang2.png";
import imgilsang3 from "../../../assets/images/doing/ilsang3.png";
import imgilsang4 from "../../../assets/images/doing/ilsang4.png";
import imgilsang5 from "../../../assets/images/doing/ilsang5.png";

import { Container, Row, Col } from "react-bootstrap";

const ImgIntroduce = () => {
  const images = [imgilsang1, imgilsang2, imgilsang3, imgilsang4, imgilsang5];
  const sentences = [
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
    "심심하면 언제든 함께하는 CSPC 일상",
  ];

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
    <div className="main">
      <div className="Main">
        <div className="frame">
          <div className="First">
            <img
              className="picture"
              src={"https://dev.cspc.me/media/intro_picnicc.jpg"}
            />
            <div className="name1">소풍</div>
            <div className="detail1">봄, 가을마다 함께 떠나는 소풍</div>
          </div>

          <div className="First num2">
            <img
              src={"https://dev.cspc.me/media/fooddd.jpg"}
              className="picture"
            />
            <div className="name1">회식</div>
            <div className="detail1">든든한 예산으로 맛있는 회식</div>
          </div>

          <div className="First num3">
            <img
              className="picture"
              src={"https://dev.cspc.me/media/intro_mt.jpg"}
            />
            <div className="name1">MT</div>
            <div className="detail1">방학에 함께 떠나는 MT</div>
          </div>

          <div className="Second">
            <img
              className="picture"
              src={"https://dev.cspc.me/media/intro_haek.png"}
            />
            <div className="name2">해커톤</div>
            <div className="detail2">함께 밤 새면서 달리는 해커톤</div>
          </div>

          <div className="Second num2">
            <img
              className="picture"
              src={"https://dev.cspc.me/media/intro_semina.jpg"}
            />
            <div className="name2">세미나</div>
            <div className="detail2">
              졸업생분들에게 듣는 유익한 꿀팁 세미나
            </div>
          </div>

          <div className="Second num3">
            <img
              className="picture"
              src={"https://dev.cspc.me/media/intro_xmas.jpg"}
            />
            <div className="name2">크리스마스 파티</div>
            <div className="detail2">CSPC 선후배가 함께 모여 즐기는 파티</div>
          </div>

          <div className="Third">
            <img className="picture" src={images[currentIndex]} />
            <div className="name3">CSPC 일상</div>
            <div className="detail3">심심하면 언제든 함께 하는 일상</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgIntroduce;
