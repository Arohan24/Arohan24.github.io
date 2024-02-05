import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
  Hi there! I'm <span className="purple">Arohan Harsh Dubey</span>, hailing from the enchanting city known as the <span className="purple">City of Taj</span>.
  <br />
  I earned my MCA degree from Hindustan Institute of Management and Computer Studies.
  <br />
  Currently, I thrive in the world of technology as a Full Stack/Prompt Engineer at Leewayhertz Technologies.
  <br />
  <br />
  In my journey, I've had the privilege of working on the MERN stack and navigating the realms of AI/ML with a particular interest in generative AI, such as OpenAI.
</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Programmers don't make mistakes; they create unexpected features."{" "}
          </p>
          <footer className="blockquote-footer">Arohan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
