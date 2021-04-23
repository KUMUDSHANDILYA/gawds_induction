import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Header.css";

class Header extends Component{

  constructor(props) {

         super(props);
         this.state = {
             isModalOpen: false
         };
         this.toggleModal = this.toggleModal.bind(this);
     }

     toggleModal() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

render(){
  return (
    <>
    <Navbar className="navbar-dark bgblack fixed-top">

            <NavbarBrand className="tesla" href="/"><img src = {TeslaLogo} alt = "TESLA"/></NavbarBrand>
            <NavbarBrand className="country" onClick={this.toggleModal}><b>EU</b></NavbarBrand>

    </Navbar>


    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                 <ModalHeader toggle={this.toggleModal} className = "m_head">
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
                     <option>United States</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Canada</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Mexico</option>
                     </FormGroup>
                     </Col>

                     <Col>
                     <FormGroup>
                     <Label className = "l">Europe</Label>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Belgie</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Belgique</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Cesco</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Danmark</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>France</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Ireland</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Italia</option>
                     </FormGroup>
                     </Col>
                     <Col>
                     <FormGroup>
                     <option>Netherland</option>
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
}

export default Header;
