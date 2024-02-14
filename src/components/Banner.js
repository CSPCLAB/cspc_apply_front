import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Navbar sticky="top" varient="light" bg="white" expand="md">
        <Container>
          <Nav className="banner">
            <Navbar.Brand href="/" id="bannerbrand">
              CSPC
            </Navbar.Brand>
            <Nav.Item>
              <Nav.Link href="/introduce" id="bannerletter">
                소개
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/applyGuide" id="bannerletter">
                지원안내
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login" id="bannerletter">
                지원하기
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Banner;
