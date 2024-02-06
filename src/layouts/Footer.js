import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

const Footer = () => {
  const [master, setMaster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaster = async () => {
      try {
        setError(null);
        setMaster(null);
        setLoading(true);
        const response = await axios.get(
          "https://apply.cspc.me/api/user/master",
        );
        setMaster(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchMaster();
  }, []);

  return (
    <div className="footer">
      <div className="footerLine" />
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
        <div className="footerWord school">서강대학교 리치과학관 914호</div>
        <div className="footerWord help">문의</div>
        {/* 이름과 이메일 api콜 필요 */}
        <div className="footerWord email">
          {master === null
            ? "학회장 OOO abc@gmail.com"
            : "학회장 " + master.name + " " + master.email}
        </div>
      </div>
    </div>
  );
};

export default Footer;
