import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import ScrollAnimation from "react-animate-on-scroll";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p>
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>
        <h1>Ekansh Singh</h1>
        <h3>Front-End Development | SEO | Management</h3>
        <p className="small-resume">
          Bachelor of Engineering | Electronics and Computer Engineering
          <br />
          Thapar Institute of Engineering and Technology Patiala
        </p>
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
        <ScrollAnimation animateIn="fadeInleft" delay={0}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/ekanshsinghin/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/singh-ekansh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B917380587032&text=Hello+Ekansh%2C+I+am+interested+in+your+services&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <img src={Illustration} alt="Illustration" />
      </div>
    </Container>
  );
}
