import React, {useState, useEffect} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Header.css";

const Header = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    setIsModalOpen(!isModalOpen);
  }


  return (
    <>
    <Navbar className="navbar-dark bgblack fixed-top">

            <NavbarBrand className = "tesla" href="/"><img src = {TeslaLogo} alt = "TESLA"/></NavbarBrand>
            <NavbarBrand className = "cont" onClick={toggleModal}><b>EU</b></NavbarBrand>

    </Navbar>


    <Modal isOpen={isModalOpen} toggle={toggleModal}>

                 <ModalHeader toggle={toggleModal} className = "m_head">
                 <Container>
                 <Row>
                 <Col>
                 <p className = "modal_head">Select your Market</p>
                 </Col>
                 </Row>
                 </Container>
                </ModalHeader>

                 <ModalBody >

                 <Container>
                 <Row>
                     <Form >
                     <Col>
                     <FormGroup>
                     <Label className = "l">North America</Label>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>United States</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Canada</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Mexico</option>
                     </FormGroup>
                     </Col>

                     <Col>
                     <FormGroup>
                     <Label className = "l">Europe</Label>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Belgie</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Belgique</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Cesco</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Danmark</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>France</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Ireland</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Italia</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {toggleModal}>Netherland</option>
                     </FormGroup>
                     </Col>
                     </Form>
                     </Row>
                     </Container>
                 </ModalBody>
             </Modal>
</>

  );
}


export default Header;
