import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { get_master_info } from "apis/master";
import "../styles/MobileFooter.css";

import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

const MobileFooter = () => {
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
    <>
      <div className="footerPadding" />
      <div className="footerLine" />
      <Navbar className="mt-5 mobileFooter">
        <Container className="mobileFooterWord">
          <Row>
            <Col className="mobileCspc">
              <Link to="/" className="mobileLink">
                CSPC
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/introduce" className="mobileLink">
                소개
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/applyGuide" className="mobileLink">
                지원안내
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/login" className="mobileLink">
                지원하기
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <Col>서강대학교 리치과학관 914호 문의 </Col>
        </Container>
        <Container>
          <Col>
            문의{" "}
            {master === null
              ? "학회장 OOO abc@gmail.com"
              : "학회장 " + master.name + " " + master.email}
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default MobileFooter;
