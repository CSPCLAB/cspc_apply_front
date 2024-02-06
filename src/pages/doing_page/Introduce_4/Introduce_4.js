import React from "react";
import "../Introduce.css";
import "./Introduce_4.css";
import imgPicnic from "../../doing_page/img/picnic.png";
import imgHaek from "../../doing_page/img/haek.png";
import imgMt from "../../doing_page/img/mt.png";
import imgDiscord from "../../doing_page/img/dic.png";
import imgParty from "../../doing_page/img/party.png";
import imgSemina from "../../doing_page/img/semina.jpg";
import imgFoood from "../../doing_page/img/foood.jpg";
import imgLogo from "../../doing_page/img/cspcLogo.png";
import { Container, Row, Col } from "react-bootstrap";

const Introduce_4 = () => {
  return (
    <div className="main">
      <div className="Main">
        <div className="frame">
          <div className="First">
            <img className="picture" src={imgPicnic} />
            <div className="name1">소풍</div>
            <div className="detail1">봄, 가을마다 함께 떠나는 소풍</div>
          </div>

          <div className="First num2">
            <img className="picture" src={imgFoood} />
            <div className="name1">회식</div>
            <div className="detail1">든든한 예산으로 맛있는 회식</div>
          </div>

          <div className="First num3">
            <img className="picture" src={imgMt} />
            <div className="name1">MT</div>
            <div className="detail1">방학에 함께 떠나는 MT</div>
          </div>

          <div className="Second">
            <img className="picture" src={imgHaek} />
            <div className="name2">해커톤</div>
            <div className="detail2">함께 밤 새면서 달리는 해커톤</div>
          </div>

          <div className="Second num2">
            <img className="picture" src={imgSemina} />
            <div className="name2">세미나</div>
            <div className="detail2">선배들에게 듣는 유익한 꿀팁 세미나</div>
          </div>

          <div className="Second num3">
            <img className="picture" src={imgParty} />
            <div className="name2">크리스마스 파티</div>
            <div className="detail2">
              CSPC 선후배가 함께 모여 이야기하는 크파
            </div>
          </div>

          <div className="Third">
            <img className="picture" src={imgLogo} />
            <div className="name3">디스코드</div>
            <div className="detail3">심심하면 언제든 함께 만나는 디스코드</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce_4;
