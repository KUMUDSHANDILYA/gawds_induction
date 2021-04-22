import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import TeslaLogo from "../assets/teslaLogoSmall.svg";
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
    <Navbar className="navbar-dark bgblack">
    <div className="container">
            <NavbarBrand href="/"><img src = {TeslaLogo} alt = "TESLA"/></NavbarBrand>
            <NavbarBrand onClick={this.toggleModal}><b>EU</b></NavbarBrand>
        </div>
    </Navbar>


    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                 <ModalHeader toggle={this.toggleModal}><p className = "ModalHead">Select your Market</p></ModalHeader>
                 <ModalBody>


                     <Form>
                         <FormGroup>
                             <h2 className = "h_2">North America</h2>
                             <p>United States</p>
                             <p>Canada</p>
                             <p>Mexico</p>
                         </FormGroup>
                     </Form>


                 </ModalBody>
             </Modal>
</>

  );
}
}

export default Header;
