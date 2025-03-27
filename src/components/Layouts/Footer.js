import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { get_master_info } from "apis/master";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Navbar } from "react-bootstrap";

import { isMobile, isBrowser } from "react-device-detect";

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
    <>
      <div className="footerPadding" />
      <div className="lined" />
      <Navbar className="mt-5">
        <Container className="footerBox">
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
          <div className="footerWord school">다산관 104,105</div>
          <div className="footerWord help">
            문의{" "}
            {master === null
              ? "학회장 OOO abc@gmail.com"
              : "학회장 " + master.name + " " + master.email}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
