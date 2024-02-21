import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

import "../styles/Banner.css";

const Banner = () => {
  const [curPage, setCurPage] = useState("main");
  const location = useLocation();

  useEffect(() => {
    // 현재 경로를 기반으로 curPage 상태 업데이트
    const path = location.pathname;
    if (path === "/") {
      setCurPage("main");
    } else if (path.startsWith("/applyGuide")) {
      setCurPage("지원안내");
    } else if (path.startsWith("/introduce")) {
      setCurPage("소개");
    } else if (path.startsWith("/apply")) {
      setCurPage("지원하기");
    } else if (path.startsWith("/login")) {
      setCurPage("login");
    } else {
      setCurPage("other");
    }
  }, [location]);

  if (curPage == "main" || curPage == "other" || curPage == "login")
    return null;
  else {
    return (
      <>
        {/* <div className="applyBanner">
          <div className="applyBannerBox">
            <div className="applyWordBanner">{curPage}</div>
          </div>
        </div> */}
        <Navbar expand="lg" className="applyBanner">
          <Container>
            <Nav className="applyWordBanner">{curPage}</Nav>
          </Container>
        </Navbar>
      </>
    );
  }
};

export default Banner;
