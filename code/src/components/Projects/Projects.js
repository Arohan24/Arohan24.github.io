import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import makeMyTale from "../../Assets/Projects/MakeMyTale.png";
import weatherApp from "../../Assets/Projects/WeatherApp.png";
import razorpay from "../../Assets/Projects/razorpay.png";
import contactUs from "../../Assets/Projects/Contact_Us.png";
import chatify from "../../Assets/Projects/chatify.png";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import blog from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Recruit"
              description="Backend modules for an enterprise recruitment and assessment platform covering candidate lifecycle, assessments, interview scheduling, and reporting. Built secure REST APIs, optimized MongoDB queries, and worked on AI-assisted assessment generation and workflow automation."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="Plutas.ai"
              description="Backend APIs using Node.js and PostgreSQL for an AI-driven platform. Designed relational database schema and secure service endpoints to support scalable application workflows."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeMyTale}
              isBlog={false}
              title="AI Story Generator"
              description="Create your own AI-powered story. Built storytelling workflows with OpenAI APIs, prompt engineering, and multimedia generation so users can generate personalized stories with images, audio, and video."
              ghLink=""
              demoLink="https://www.makemytale.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Social Media Application"
              description="Authentication, user management, and post management APIs using Node.js and MongoDB. Built secure REST endpoints for core social platform features including signup, login, profiles, and content interactions."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="A real-time weather application with live weather updates, Air Quality Index (AQI) data, and global location support. Focuses on detailed meteorological insights and a user-friendly experience."
              ghLink="https://github.com/Arohan24/Weather_App.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={razorpay}
              isBlog={false}
              title="Payment / UPI Integration Page"
              description="A web interface for handling payments including UPI, cards, net banking, wallets, and Pay Later options. Includes QR scanning for payments for a smooth checkout experience."
              ghLink="https://github.com/Arohan24/Razorpay-Integration.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactUs}
              isBlog={false}
              title="Contact Us System"
              description="A full-stack contact form system where users submit details and messages, data is stored in a database, and emails are sent using Nodemailer. Backend-integrated communication feature for web apps."
              ghLink="https://github.com/Arohan24/ContactUs_Nodemailer.git"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
