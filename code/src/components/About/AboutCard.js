import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Arohan Harsh Dubey</span>,
            hailing from the enchanting city known as the{" "}
            <span className="purple">City of Taj</span>.
            <br />
            I earned my MCA from Dr. A.P.J. Abdul Kalam Technical University
            (80%) and a Bachelor of Commerce from Jiwaji University.
            <br />
            Currently, I work as a Software Developer at{" "}
            <span className="purple">WalkingTree Technologies</span>, building
            backend services for enterprise recruitment and assessment
            platforms. Previously, I was an Associate Software Developer at
            LeewayHertz Technologies.
            <br />
            <br />
            With 3+ years of experience, I specialize in Node.js, Express.js,
            MongoDB, PostgreSQL, REST APIs, and Generative AI integration.
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
