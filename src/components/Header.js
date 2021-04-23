import React, {useState, useEffect} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Header.css";

const Header = ({setLang}) => {



  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (e) => {
    setIsModalOpen(!isModalOpen);
  }

  const func_0 = (e) => {
    setLang(0);
    toggleModal();
  }

  const func_1 = (e) => {
    setLang(1);
    toggleModal();
  }

  const func_2 = (e) => {
    setLang(2);
    toggleModal();
  }

  const func_3 = (e) => {
    setLang(3);
    toggleModal();
  }

  const func_4 = (e) => {
    setLang(4);
    toggleModal();
  }

  const func_5 = (e) => {
    setLang(5);
    toggleModal();
  }



  return (
    <>
    <Navbar className="navbar-dark bgblack fixed-top">

            <NavbarBrand className = "tesla" href="/"><img src = {TeslaLogo} alt = "TESLA"/></NavbarBrand>
            <NavbarBrand onClick={toggleModal}><b className = "cont">Country</b></NavbarBrand>

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
                     <option onClick = {func_0}>United States</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_1}>Canada</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_2}>Mexico</option>
                     </FormGroup>
                     </Col>

                     <Col>
                     <FormGroup>
                     <Label className = "l">Europe</Label>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_3}>Belgie</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_4}>Belgique</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_5}>Cesco</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_1}>Danmark</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_0}>France</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_2}>Ireland</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_3}>Italia</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option onClick = {func_4}>Netherland</option>
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
