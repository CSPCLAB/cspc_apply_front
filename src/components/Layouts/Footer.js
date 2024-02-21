import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { get_master_info } from "apis/master";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import axios from "axios";

const Footer = () => {
  const [master, setMaster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaster = async () => {
      setError(null);
      setMaster(null);
      setLoading(true);
      get_master_info()
        .then((data) => {
          if (data != null) setMaster(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    };

    fetchMaster();
  }, []);

  return (
    <footer className="mt-5">
      <Container
        fluid
        className="text-white d-flex justify-content-center align-items-center p-3"
        id="footer"
      >
        <Row>
          <Col>
            <div className="footerBox">
              <Link to="/">
                <div className="cspc">CSPC</div>
              </Link>
              <Link to="/introduce">
                <div className="footerWord introduce">소개</div>
              </Link>
              <Link to="/applyGuide">
                <div className="footerWord applyHelp">지원안내</div>
              </Link>
              <Link to="/login">
                <div className="footerWord apply">지원하기</div>
              </Link>
              <div className="footerWord school">
                서강대학교 리치과학관 914호
              </div>
              <div className="footerWord help">문의</div>
              {/* 이름과 이메일 api콜 필요 */}
              <div className="footerWord email">
                {master === null
                  ? "학회장 OOO abc@gmail.com"
                  : "학회장 " + master.name + " " + master.email}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>

    // <div className="footer">
    //   <div className="footerLine" />
    //   <div className="footerBox">
    //     <Link to="/">
    //       <div className="cspc">CSPC</div>
    //     </Link>
    //     <Link to="/introduce">
    //       <div className="footerWord introduce">소개</div>
    //     </Link>
    //     <Link to="/applyGuide">
    //       <div className="footerWord applyHelp">지원안내</div>
    //     </Link>
    //     <Link to="/login">
    //       <div className="footerWord apply">지원하기</div>
    //     </Link>
    //     <div className="footerWord school">서강대학교 리치과학관 914호</div>
    //     <div className="footerWord help">문의</div>
    //     {/* 이름과 이메일 api콜 필요 */}
    //     <div className="footerWord email">
    //       {master === null
    //         ? "학회장 OOO abc@gmail.com"
    //         : "학회장 " + master.name + " " + master.email}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
