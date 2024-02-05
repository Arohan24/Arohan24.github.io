import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import makeMyTale from "../../Assets/Projects/MakeMyTale.png";
import weatherApp from "../../Assets/Projects/WeatherApp.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeMyTale}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              demoLink=""      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
