import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

import projImg1 from "../assets/img/ProjImg1-0.png";
import projImg1_2 from "../assets/img/ProjImg1-1.png";
import projImg1_3 from "../assets/img/ProjImg1-2.png";

import projImg2 from "../assets/img/ProjImg2-1.png";
import projImg2_2 from "../assets/img/ProjImg2-2.png";

import projImg3 from "../assets/img/threads1.png";
import projImg3_2 from "../assets/img/threads2.png";
import projImg3_3 from "../assets/img/threads3.png";
import projImg3_4 from "../assets/img/threads4.png";

import navIcon2 from "../assets/img/icons8-github (1).svg";

import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Social Media Website",
      description: `A social media platform, where users can post images, videos, and text, edit their profiles, send messages, like and reply to posts, and browse other users content. Reactjs, nodejs, expressjs, MongoDB.  `,
      link: `https://github.com/AdityaLohar/ArIES-open-project`,
      // imgUrl: projImg1,
      images: [projImg3, projImg3_2, projImg3_3, projImg3_4],
    },
    {
      title: "Dappazon",
      description: `Blockchain marketplace for direct, secure buying and selling with crypto payments.`,
      link: `https://github.com/AdityaLohar/dec-e-commerce`,
      images: [projImg1, projImg1_2, projImg1_3],
    },
    {
      title: "TokenMaster",
      description: `Similar to BookMyShow but a decentralized version along with tokens. \n Reactjs, nodejs, expressjs, MongoDB.`,
      link: `https://github.com/AdityaLohar/tokenmaster-1`,
      // imgUrl: projImg1,
      images: [projImg2, projImg2_2],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <h2>Projects</h2>
        <p>Here are some of the things I have built</p>
        {projects.map((project, index) => (
          <Row key={index} className="project-outer align-items-center my-5">
            <Col md={6} className={index % 2 === 0 ? "order-md-1" : "order-md-2"}>
              <Carousel interval={2000} controls={false} indicators={true}>
                {project.images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img className="d-block w-100" src={image} alt={`Project Image ${idx}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={6} className={index % 2 === 0 ? "order-md-2" : "order-md-1"}>
              <div id="project-info" className={index % 2 === 0 ? "" : "mb-3 mb-md-0"}>
                <h3> <a href={project.link} target="_blank"> {project.title} </a></h3>
                <p>{project.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );

};