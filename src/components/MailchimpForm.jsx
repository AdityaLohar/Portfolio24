import { Button, Col, Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const MailchimpForm = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Get in Touch</h2>
            {/* <p>Feel free to reach out to me via email</p> */}
            <div className="contact-details">
              <p><i className="fas fa-envelope"></i> adityalohar55@example.com</p>
              <p>I'm also active on Instagram!</p>
              <Button variant="primary" className="say-hello-button" href="https://www.instagram.com/aditya.lohar._/" target="_blank">
                Say Hello
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
