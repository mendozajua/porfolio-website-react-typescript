import React from 'react';
import {Col,Row, Container} from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <div className="logo">
                            <span className="letter j">J</span>
                            <span className="letter c">C</span>
                            <span className="letter m">M</span>
                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mendozajua/" target={"_blank"}><img src={navIcon1} alt="Icon" /></a>
                            {/*<a href="#"><img src={navIcon2} alt="Icon" /></a>*/}
                            {/*<a href="#"><img src={navIcon3} alt="Icon" /></a>*/}
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;