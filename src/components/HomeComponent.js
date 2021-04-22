import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import BottomBar from "./BottomBar.js";
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
    <Container className = "position-sticky">
    <Row>
    <Image/>
    </Row>
    <Row>
      <BottomBar/>
    </Row>
    </Container>
    </Col>
    <Col sm = {{span: 3}} >
      <SideBar/>
    </Col>
    </Row>
    </div>
  );
}

export default Home;
