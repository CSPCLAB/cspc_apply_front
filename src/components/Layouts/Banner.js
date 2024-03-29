import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

import { isBrowser, isMobile } from "react-device-detect";

import "../styles/Banner.css";
import { useAsync } from "react-async";
import { get_recruit_info } from "../../apis/get_recruit";

const Banner = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: get_recruit_info });
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
    } else if (
      path.startsWith("/apply") ||
      path.startsWith("/middle") ||
      path.startsWith("/final")
    ) {
      setCurPage("지원하기");
    } else if (path.startsWith("/login")) {
      setCurPage("login");
    } else {
      setCurPage("other");
    }
  }, [location]);

  if (curPage == "main" || curPage == "other") return null;
  else if (curPage == "login" && data) {
    if (data.process !== "close") {
      return null;
    } else {
      return (
        <>
          {isBrowser ? (
            <Navbar expand="lg" className="applyBanner">
              <Container>
                <Nav className="applyWordBanner">지원안내</Nav>
              </Container>
            </Navbar>
          ) : (
            <Navbar expand="lg" className="mobileApplyBanner">
              <Container>
                <Nav className="applyWordBanner">지원안내</Nav>
              </Container>
            </Navbar>
          )}
        </>
      );
    }
  } else {
    return (
      <>
        {isBrowser ? (
          <Navbar expand="lg" className="applyBanner">
            <Container>
              <Nav className="applyWordBanner">{curPage}</Nav>
            </Container>
          </Navbar>
        ) : (
          <Navbar expand="lg" className="mobileApplyBanner">
            <Container>
              <Nav className="applyWordBanner">{curPage}</Nav>
            </Container>
          </Navbar>
        )}
      </>
    );
  }
};

export default Banner;
