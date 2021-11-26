import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <Container fluid className="footer">
  <Row>
    <Col>
    <h5>Address</h5>
    <p>Your address goes here<br></br>

0123456789 (9am - 5pm EST, Monday - Friday)<br></br>

info@example.com</p>
<i class="fab fa-facebook-f me-3"></i>
<i class="fab fa-twitter me-3"></i>
<i class="fab fa-instagram me-3"></i>
<i class="fab fa-linkedin-in"></i>
 <h5 className=" mt-5">© 2021 Maxcoach</h5> 
    </Col>
    <Col>
    </Col>
    <Col>
    <h4>Explore</h4>
    <li>
        <a href="#">Start here</a>
    </li>
    <li>
        <a href="#">Blog</a>
    </li>
    <li>
        <a href="#">About us</a>
    </li>
    
    </Col>
    <Col>
    <h4></h4>
    <br></br>
    <li>
        <a href="#">Success story</a>
    </li>
    <li>
        <a href="#">Courses</a>
    </li>
    <li>
        <a href="#">Contact us</a>
    </li>
    
    </Col>
    <Col>
    <h4>Information</h4>

    <li>
<a href="#">Membership</a>
    </li>
    <li>
    <a href="#">Purchase guide</a>
    </li>
    <li>
    <a href="#">Privacy policy</a>
    </li>
    <li>
    <a href="#">Terms of service</a>
    </li>
    
    </Col>
    
  </Row>
</Container>
        </div>
    );
};

export default Footer;