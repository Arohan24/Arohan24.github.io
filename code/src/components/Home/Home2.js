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
        I'm a Backend Software Engineer with 3+ years of experience designing
        and developing enterprise applications using{" "}
        <span className="purple"> Node.js </span>,{" "}
        <span className="purple"> Express.js </span>,{" "}
        <span className="purple"> MongoDB </span>, and{" "}
        <span className="purple"> PostgreSQL </span>. I focus on REST API
        development, scalable backend architecture, and recruitment platforms.
        <br />
        <br />
        I also work with{" "}
        <span className="purple"> Generative AI </span> — integrating OpenAI
        and Gemini APIs, prompt engineering, and AI-powered workflows into
        production systems.
        <br />
        <br />
        Passionate about building reliable software and solving complex
        engineering problems.
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
