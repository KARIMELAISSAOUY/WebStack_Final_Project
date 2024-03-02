import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/coding.gif";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";




const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow"> ABDELKARIM ELAISSAOUY </span>
                  and I'm from <span className="yellow"> Morocco </span>
                <br />
                <br />
                <i class="fa fa-dot-circle-o" aria-hidden="true"></i> I'm  a  <i class="fa fa-code" aria-hidden="true"></i> Full Stack developer & Software Engineer <i class="fa fa-code" aria-hidden="true"></i>  ...
                <br />
                <br />
                <i class="fa fa-check" aria-hidden="true"></i> As a
                  <b className="yellow"> Full-Stack </b> Developer,  
                  I Enjoy tackling new challenges & continuously Expanding My Skillset ... 
                  <p><i class="fa fa-check" aria-hidden="true"></i> My expertise spans the entire development lifecycle, from conceptualization and design to implementation and deployment</p>
                  <br /> <i class="fa fa-check-circle" aria-hidden="true"></i> I am Proficient in
                    <b className="yellow"> Javascript, </b>
                    as well as have knowledge in programming languages such as C, Java, Python ,
                  <b className="yellow"> Php, and More...</b>
                  <br />
                  <br />
                  <i class="fa fa-check-circle" aria-hidden="true"></i> I have a passion for working
                  with <b className="yellow">Nextjs,Node.js,MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      All Modern Js Libraries & Frameworks...
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  <i class="fa fa-arrow-right" aria-hidden="true"></i> I'm also Interested by all Latest
                  <i>
                    <b className="yellow"> Web Technologies and , </b>
                    anything related to 
                    <b className="yellow"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 className="morea">More About Me <i class="fa fa-info-circle" aria-hidden="true"></i></h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow"> Welcome !</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/karimelaissaouy"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/karimelaissaouy"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About