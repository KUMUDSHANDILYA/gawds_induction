import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./BottomBar.css";

const BottomBar = ({index}) => {

  const mi = [250, 300, 500];
  const lbs = [7500, 10000, 14000];
  const s = [6.5, 4.5, 2.9];

  const [MI, setMI] = useState(mi[0]);
  const [LBS, setLBS] = useState(lbs[0]);
  const [S, setS] = useState(s[0]);

  useEffect(() => {
    console.log(index);
    setMI(mi[index]);
    setLBS(lbs[index]);
    setS(s[index]);
  }, [index]);

  return(
    <Container>
    <p>{index}</p>
    <Row>
    <Col xs = {{span: 4}} lg = {{span: 3, offset: 2}}>
      <p className = "x"><b>{MI}+MI</b></p>
      <p className = "y">RANGE (EPA EST.)</p>
      </Col>
      <Col xs = {{span: 4}} lg = {{span: 3}}>
        <p className = "x"><b>{LBS}+lbs</b></p>
        <p className = "y">TOWING CAPACITY</p>
        </Col>
        <Col xs = {{span: 4}} lg  = {{span: 2}}>
          <p className = "x"><b> &#60; {S}s</b></p>
          <p className = "y">0-60 MPH</p>
          </Col>
    </Row>
    </Container>
  );
}

export default BottomBar;
