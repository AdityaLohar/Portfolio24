import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github (1).svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/aditya-lohar-4b80871b8" target="_blank" >
                  <img src={navIcon1} alt="linkedIn" />
                </a>
                <a href="https://github.com/AdityaLohar" target="_blank">
                  <img src={navIcon2} alt="github" />
                </a>
                <a href="https://www.instagram.com/aditya.lohar._/" target="_blank">
                  <img src={navIcon3} alt="instagram" />
                </a>
            </div>
            <p>happy coding</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}