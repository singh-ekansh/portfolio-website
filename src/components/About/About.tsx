import { Container } from "./styles";
import EkanshSingh from "../../assets/EkanshSingh.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongoIcon from "../../assets/mongo-icon.svg"; // Add your MongoDB logo file here
import wixIcon from "../../assets/wix-icon.svg"; // Add your Wix logo file here
import wordpressIcon from "../../assets/wordpress.svg";
import pythonIcon from "../../assets/python-icon.svg"; // Add your Python logo file here
import gitIcon from "../../assets/git-icon.svg"; // Add your Git logo file here
import jetpackIcon from "../../assets/jetpack-icon.svg"; // Add your Jetpack logo file here
import cppIcon from "../../assets/cpp-icon.svg"; // Add your C++ logo file here
import figmaIcon from "../../assets/figma-icon.svg"; // Add your Figma logo file here
import vscodeIcon from "../../assets/vscode-icon.svg"; // Add your Visual Studio Code logo file here
import intellijIcon from "../../assets/intellij-icon.svg"; // Add your IntelliJ logo file here
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Ekansh Singh, an aspiring full-stack developer with a
            passion for crafting innovative and efficient digital solutions.
            With expertise in HTML, CSS, JavaScript, React.js, and MongoDB, I
            specialize in building seamless, user-friendly web applications that
            cater to modern needs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Beyond custom development, I bring experience in leveraging CMS
            platforms like WordPress, ensuring my clients have the flexibility
            to manage their websites effortlessly. Whether it’s designing
            intuitive user interfaces or implementing robust back-end systems,
            I’m committed to delivering solutions that exceed expectations.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Let’s connect to bring your ideas to life with creativity and
            precision!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mongoIcon} alt="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wixIcon} alt="Wix" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={wordpressIcon} alt="WordPress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={gitIcon} alt="Git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={jetpackIcon} alt="Jetpack" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={cppIcon} alt="C++" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={figmaIcon} alt="Figma" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <img src={vscodeIcon} alt="Visual Studio Code" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={intellijIcon} alt="IntelliJ" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={EkanshSingh} alt="Ekansh Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
