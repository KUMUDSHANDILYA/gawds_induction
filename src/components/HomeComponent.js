import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header.js";
import Image from "./Image.js";
import "./Home.css";
const Home = () => {
  return (
    <div className = "home">
    <Row>
    <Col sm = {12}>
    <Header/>
    </Col>
    </Row>
    <Row>
    <Col sm = {8}>
    <Image/>
    </Col>
    </Row>
    </div>
  );
}

export default Home;
