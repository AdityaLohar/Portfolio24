import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <ul className="skill-list">
                <li>
                  <h5>Frontend</h5>
                  <p>Javascript , React Js , Recoil(basic) , Typescript </p>
                </li>
                <li>
                  <h5>Backend</h5>
                  <p>Node.js , Express.js</p>
                 </li>
                <li>
                  <h5>Database</h5>
                  <p>MongoDb , PostgreSQL </p>  
                </li>
                <li>
                  <h5>Competitive Programming</h5>
                  <p>Codeforces: 1456 (Specialist) <br />Handle: Lohaaar</p>
                </li>
                <li>
                  <h5>Blockchain Technologies</h5>
                  <p>Blockchain Fundamentals <br /> Smart Contract Development (Solidity) <br />Blockchain Interaction (Ether.js) <br /> Smart Contract Testing & Deployment (Hardhat)</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
