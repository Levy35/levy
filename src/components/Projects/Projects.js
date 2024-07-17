import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import edoc from "../../Assets/Projects/edoc.png";
import todo from "../../Assets/Projects/todo.png";
import gym from "../../Assets/Projects/gym.png";

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
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="I created this to-do list as an organizational tool to outline tasks and responsibilities that need to be completed within a specific timeframe. It helps me prioritize and manage my workload by listing each task, often with associated deadlines or levels of importance. By breaking down larger projects into manageable steps, the to-do list enhances productivity and efficiency, ensuring that nothing is overlooked. It also provides a sense of accomplishment as items are checked off upon completion, contributing to better time management and reduced stress."
              ghLink="https://github.com/Levy35/To_Do_List"
              demoLink="https://to-do-list-34.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym"
              description="The creation of this gym website represents a pivotal step in my professional development, driven by a desire to expand my skills and expertise in web development. This prototype showcases my dedication to mastering industry-standard practices and delivering user-friendly digital experiences. Should you require a bespoke website for your business or personal endeavors, I am eager to collaborate, leveraging my technical proficiency and creative insights to meet your specific needs effectively."
              ghLink="https://github.com/Levy35/Gym"
              demoLink="https://gym-a.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edoc}
              isBlog={false}
              title="EDoc "
              description="This web project was developed for e-channeling purposes, enabling clients and patients of medical establishments, such as clinics and hospitals, to request doctor appointments online. It also assists doctors in managing their appointment schedules. The system efficiently organizes and submits appointment requests to the selected doctor. However, please note that the site is currently non-responsive. This was a project to Develop my PHP Knowledge. "
              ghLink="https://github.com/Levy35/edoc"
              demoLink="https://edoclevi.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
