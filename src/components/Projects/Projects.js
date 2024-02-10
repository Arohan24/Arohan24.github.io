import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import makeMyTale from "../../Assets/Projects/MakeMyTale.png";
import weatherApp from "../../Assets/Projects/WeatherApp.png";
import razorpay from "../../Assets/Projects/razorpay.png";
import contactUs from "../../Assets/Projects/Contact_Us.png";


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
              imgPath={makeMyTale}
              isBlog={false}
              title="MakeMyTale"
              description="The MakeMyTale project aims to create a user-friendly website where users can input their story preferences and generate personalized stories with accompanying images using OpenAI and DALL·E APIs. It also includes features for user management, collaboration, and options for audio and video creation to enhance the storytelling experience."
              ghLink=""
              demoLink="https://www.makemytale.com/"
            />
          </Col>

          <Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="Immerse yourself in the grandeur of real-time meteorological marvels and the intricate details of the Air Quality Index (AQI) from any corner of the globe. Our web application is a symphony of technology and nature, designed to keep you informed and ready to dance with the ever-changing rhythm of the weather. Experience the future of weather tracking today!"
              ghLink="https://github.com/Arohan24/Weather_App.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={razorpay}
              isBlog={false}
              title="Razorpay PG Integration"
              description="Dive into the seamless world of online payments with our Razorpay Integration solution. Delve into the intricacies of secure transactions and the ease of managing payments effortlessly. Our web application seamlessly combines cutting-edge technology with financial finesse, offering users a smooth and reliable platform to manage their payment needs. Experience the future of online transactions now!"
              ghLink="https://github.com/Arohan24/Razorpay-Integration.git"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={contactUs}
              isBlog={false}
              title="Contact Us"
              description="Embark on a journey of seamless communication with our Contact Us Page Implementation using Nodemailer and Database Storage. This project showcases a straightforward yet powerful way to incorporate a Contact Us feature into your web application. Users can effortlessly submit their contact details and messages, which are securely stored in a database and simultaneously sent via email using Nodemailer."
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
