import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import pr_one from "../assets/projects/project01.png";
import pr_two from "../assets/projects/project02.png";
import pr_tree from "../assets/projects/project03.png";
import pr_four from "../assets/projects/project04.png";
import pr_five from "../assets/projects/project05.png";
import pr_six from "../assets/projects/project06.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Top <i class="fa fa-star-o" aria-hidden="true"></i> <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Let's See My Latest special projects <i class="fa fa-eye" aria-hidden="true"></i> ... 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr_one}
              isBlog={false}
              title="Online Marketplace Platform"
              description="A full-stack web application that allows users to buy and sell products online. The platform includes features such as user authentication, product listings, search and filtering, shopping cart functionality, and secure payment processing. Admins can manage users, products, and orders through an intuitive dashboard."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr_two}
              isBlog={false}
              title="Event Management System"
              description="A comprehensive e-learning platform that provides online courses, quizzes, and interactive learning materials. The platform includes user registration, course enrollment, progress tracking, and certification. Admins can manage course content, user accounts, and analytics through an easy-to-use interface."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr_tree}
              isBlog={false}
              title="E-Learning Platform"
              description="A comprehensive e-learning platform that provides online courses, quizzes, and interactive learning materials. The platform includes user registration, course enrollment, progress tracking, and certification. Admins can manage course content, user accounts, and analytics through an easy-to-use interface."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr_four}
              isBlog={false}
              title="Social Networking Site"
              description="A full-stack social networking site that connects users based on interests, location, or profession. The platform includes features such as user profiles, friend connections, news feeds, messaging, and notifications. Admins can moderate content, manage user accounts, and analyze site usage data."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr_five}
              isBlog={false}
              title="Task Management Tool"
              description="A full-stack application for managing tasks and projects, suitable for individuals or teams. Users can create tasks, set deadlines, assign tasks to team members, and track progress. The tool includes features for file sharing, commenting, and reporting to facilitate collaboration and productivity."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pr_six}
              isBlog={false}
              title="Real-Time Chat Application"
              description="A full-stack chat application that allows users to communicate in real-time. The application supports one-on-one and group chats, file sharing, and multimedia messages. It also includes features for message history, notifications, and user status indicators for a seamless communication experience."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects