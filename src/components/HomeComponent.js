import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import BottomBar from "./BottomBar.js";
import Image from "./Image.js";
import "./Home.css";
const Home = () => {

  const [index, setIndex] = useState(0);

  return (
    <div className = "home">
    <Container>
    <Row>
    <Col sm = {12}>
    <Header/>
    </Col>
    </Row>
    </Container>
    <Row className = "below_n">
    <Col sm = {8}>
    <Container className = "position-sticky">
    <Row>
    <Image/>
    </Row>
    <Row className = "random">
      <BottomBar index = {index}/>
    </Row>
    </Container>
    </Col>
    <Col sm = {{span: 4}} >
      <SideBar index = {index} setIndex = {setIndex}/>
    </Col>
    </Row>
    </div>
  );
}

export default Home;
