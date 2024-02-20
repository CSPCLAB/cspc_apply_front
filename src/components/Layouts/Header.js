import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <Navbar
        sticky="top"
        // bg="light"
        expand="lg"
        // className="justify-content-center header"
        // id="header"
      >
        <Container fluid id="headerBox">
          <Navbar.Brand href="/" id="headerbrand" className="ml-auto">
            CSPC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="full-width-navbar-nav" className="left-algin">
            <Nav className="me-auto">
              <Nav.Link href="/introduce" id="headerletter" className="mx-5">
                소개
              </Nav.Link>
              <Nav.Link href="/applyGuide" id="headerletter" className="mx-5">
                지원안내
              </Nav.Link>
              <Nav.Link href="/login" id="headerletter" className="mx-5">
                지원하기
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// const Header = () => {
//   return (
//     <>
//       <Navbar sticky="top" varient="light" bg="white" expand="md">
//         <Container>
//           <Nav className="banner">
//             <Navbar.Brand href="/" id="bannerbrand">
//               CSPC
//             </Navbar.Brand>
//             <Nav.Item>
//               <Nav.Link href="/introduce" id="bannerletter">
//                 소개
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="/applyGuide" id="bannerletter">
//                 지원안내
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link href="/login" id="bannerletter">
//                 지원하기
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

export default Header;
