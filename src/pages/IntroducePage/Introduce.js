import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Introduce.css";

import Info from "./components/Info";
import Benefit from "./components/Benefit";
import Elite from "./components/Elite";
import ImgIntroduce from "./components/ImgIntroduce";
import ApplyCard from "../../components/ApplyCard";

import { Container, Row, Col } from "react-bootstrap";

const Introduce = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Info />
          <Benefit />
          <Elite />
          <ImgIntroduce />
          <ApplyCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Introduce;
