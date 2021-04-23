import React from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody , Form, FormGroup, Input, Label} from 'reactstrap';
import "./PaymentForm.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PaymentForm = () => {
  return (
    <Form className = "f_">
        <FormGroup>
          <Label className = "head_">ENTER ACCOUNT DETAILS</Label>
        </FormGroup>
        <FormGroup>
            <Label className = "Label">FIRST NAME</Label>
            <Input className = "inputbox" type="text"
                 />
        </FormGroup>
        <FormGroup>
            <Label className = "Label">LAST NAME</Label>
            <Input className = "inputbox" type="text"
                 />
        </FormGroup>
        <FormGroup>
            <Label className = "Label">EMAIL ADDRESS</Label>
            <Input className = "inputbox" type="email"
                 />
        </FormGroup>
        <FormGroup>
            <Label className = "Label">PHONE NO.</Label>
            <Input className = "inputbox" type="tel"
                 />
        </FormGroup>

        <FormGroup>
          <Label className = "head_">PAYMENT</Label>
        </FormGroup>

        <FormGroup>
          <Label className = "head_">CARD</Label>
        </FormGroup>

        <FormGroup>
            <Label className = "Label">NAME OF CARD</Label>
            <Input className = "inputbox" type="text"
                 />
        </FormGroup>

       <FormGroup>
           <Label className = "Label">CARD NUMBER</Label>
           <Input className = "inputbox" type="text"
                />
     </FormGroup>
     <FormGroup>
         <Label className = "Label">EXPIRATION MONTH</Label>
         <select class="form-select" aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
          <option value="3">5</option>
          <option value="3">6</option>
          <option value="3">7</option>
          <option value="3">8</option>
          <option value="3">9</option>
          <option value="3">10</option>
          <option value="3">11</option>
          <option value="3">12</option>
        </select>
      </FormGroup>
    <FormGroup>
        <Label className = "Label">EXPIRATION YEAR</Label>
        <select class="form-select" aria-label="Default select example">
         <option value="2021">2021</option>
         <option value="2022">2022</option>
         <option value="2023">2023</option>
         <option value="2024">2024</option>
         <option value="2025">2025</option>
         <option value="2026">2026</option>
         <option value="2027">2027</option>
         <option value="2028">2028</option>
         <option value="2029">2029</option>
         <option value="2030">2030</option>
       </select>
    </FormGroup>
   <FormGroup>
       <Label className = "Label">CVV</Label>
       <Input className = "inputbox" type="text"
            />
  </FormGroup>
  <FormGroup>
      <Label className = "Label">BILLING ZIP CODE</Label>
      <Input className = "inputbox" type="text"
           />
 </FormGroup>

 <FormGroup>
     <Label className = "Label_1">I allow Tesla to save my payment instrument information for future transactions pursuant to the Payment Terms for Services</Label>
</FormGroup>

<FormGroup>

<b className = "b">Due Today</b>
<b className = "price">$100</b>

</FormGroup>


<Button type="submit" value="submit" color="primary">PLACE ORDER</Button>

<FormGroup>
    <Label className = "Label_1">By clicking "Place Order" I agree to the Cybertruck Pre-Order Agreement, Supercharger Fair Use Policy, the Customer Privacy Agreement, and consent to be contacted at the number provided with more information or offers about Tesla products. I understand these calls or texts may use automated dialing or pre-recorded messages. I understand my consent to be contacted is not a condition of purchase.</Label>
</FormGroup>


    </Form>

  );

}

export default PaymentForm;
