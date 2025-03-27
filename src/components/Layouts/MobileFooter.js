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
      <div className="mobileFooterPadding" />
      <div className="mobileFooterLine" />
      <Container className="mobileFooterBoxPadding">
        <Container>
          <Row className="mobileFooterBox">
            <Col className="mobileCspc" xs={3}>
              <Link to="/" className="mobileLink">
                CSPC
              </Link>
            </Col>
            <Col xs={9}>
              <Row>
                <Col className="mobileFooterWord">
                  <Link to="/introduce" className="mobileLink">
                    소개
                  </Link>
                </Col>
                <Col>
                  <Link to="/applyGuide" className="mobileLink">
                    지원안내
                  </Link>
                </Col>
                <Col>
                  <Link to="/login" className="mobileLink">
                    지원하기
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>다산관 104, 105 </Col>
          </Row>
          <Col>
            문의{" "}
            {master === null
              ? "학회장 OOO abc@gmail.com"
              : "학회장 " + master.name + " " + master.email}
          </Col>
        </Container>
      </Container>
    </>
  );
};

export default MobileFooter;
