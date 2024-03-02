import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Hireme from "../components/Skillset/hireme";
import Coding from "../components/Skillset/Coding";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow"><i class="fa fa-star" aria-hidden="true"></i> Skillset </strong>
        </h1>

        <Techstack />

        <Coding />
        <h1 className="project-heading">
          <strong className="yellow">My <i class="fa fa-star" aria-hidden="true"></i> </strong> Tools
        </h1>
        <Toolstack />

        
        <Hireme />
      </Container>
    </Container>
  )
}

export default Skillset