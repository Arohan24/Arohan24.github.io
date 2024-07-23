import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
  <Row>
    <Col md={8} className="home-about-description">
      <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
      </h1>
      <p className="home-about-body">
        Welcome! I'm passionate about weaving digital experiences using the <span className="purple"> MERN stack </span>, threading together MongoDB, Express.js, React, and Node.js. My programming journey extends beyond, with a knack for <span className="purple"> JAVA </span> and the intricacies of <span className="purple"> MySQL </span>.
        <br />
        <br />
        What truly ignites my curiosity, however, is the world of Artificial Intelligence and Machine Learning. My fascination centers on <span className="purple"> Generative AI </span>, particularly exploring the possibilities showcased by OpenAI.
        <br />
        <br />
        Join me on a journey where innovation meets functionality, and creativity intertwines with code.
      </p>
    </Col>
    <Col md={4} className="myAvtar">
      <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
      </Tilt>
    </Col>
  </Row>
  <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>
      <p>
        Feel free to <span className="purple">connect </span>with me
      </p>
      <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Arohan24"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DubeyArohan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arohan-harsh-dubey-456b501b6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
    </Col>
  </Row>
</Container>

    </Container>
  );
}
export default Home2;
