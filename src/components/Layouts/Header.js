import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg" id="hedaer">
        <Container id="headerBox">
          <Navbar.Brand href="/" id="headerBrand">
            CSPC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/introduce" id="headerletter" className="mx-4">
                소개
              </Nav.Link>
              <Nav.Link href="/applyGuide" id="headerletter" className="mx-4">
                지원안내
              </Nav.Link>
              <Nav.Link href="/login" id="headerletter" className="mx-4">
                지원하기
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
