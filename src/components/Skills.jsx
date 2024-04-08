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
                  <h5>Blockchain Technologies</h5>
                  <p>Solid understanding of blockchain fundamentals, smart contract development with Solidity, blockchain interaction using Ether.js, and decentralized application (DApp) architecture.</p>
                </li>
                <li>
                  <h5>Smart Contract Testing & Deployment</h5>
                  <p>Knowledge of smart contract testing with Hardhat, including unit and integration tests, to ensure contract integrity before deployment.</p>
                </li>
                <li>
                  <h5>Web3 Development</h5>
                  <p>Development of Web3 applications using React.js, integrating smart contracts, and connecting blockchain with front-end applications.</p>
                </li>
                <li>
                  <h5>Competitive Programming</h5>
                  <p>Algorithmic problem-solving <br /> Codeforces: 1456 (Specialist) <br />Handle: Lohaaar</p>
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
