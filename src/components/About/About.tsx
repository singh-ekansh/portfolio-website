import { Container } from "./styles";
import EkanshSingh from "../../assets/EkanshSingh.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import mongoIcon from "../../assets/mongo-icon.svg";
import wixIcon from "../../assets/wix-icon.svg";
import wordpressIcon from "../../assets/wordpress.svg";
import pythonIcon from "../../assets/python-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import jetpackIcon from "../../assets/jetpack-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import figmaIcon from "../../assets/figma-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import intellijIcon from "../../assets/intellij-icon.svg";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>About me</h2>
        <p>
          Hi there! I'm Ekansh Singh, an aspiring full-stack developer with a
          passion for crafting innovative and efficient digital solutions. With
          expertise in HTML, CSS, JavaScript, React.js, and MongoDB, I
          specialize in building seamless, user-friendly web applications that
          cater to modern needs.
        </p>
        <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          Beyond custom development, I bring experience in leveraging CMS
          platforms like WordPress, ensuring my clients have the flexibility to
          manage their websites effortlessly. Whether it’s designing intuitive
          user interfaces or implementing robust back-end systems, I’m committed
          to delivering solutions that exceed expectations.
        </p>
        <p>Let’s connect to bring your ideas to life with creativity and precision!</p>
        <h3>Here are my main skills:</h3>
        <div className="hard-skills">
          <div className="hability">
            <img src={htmlIcon} alt="HTML" />
          </div>
          <div className="hability">
            <img src={cssIcon} alt="CSS" />
          </div>
          <div className="hability">
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <div className="hability">
            <img src={reactIcon} alt="React" />
          </div>
          <div className="hability">
            <img src={mongoIcon} alt="MongoDB" />
          </div>
          <div className="hability">
            <img src={wixIcon} alt="Wix" />
          </div>
          <div className="hability">
            <img src={wordpressIcon} alt="WordPress" />
          </div>
          <div className="hability">
            <img src={pythonIcon} alt="Python" />
          </div>
          <div className="hability">
            <img src={gitIcon} alt="Git" />
          </div>
          <div className="hability">
            <img src={jetpackIcon} alt="Jetpack" />
          </div>
          <div className="hability">
            <img src={cppIcon} alt="C++" />
          </div>
          <div className="hability">
            <img src={figmaIcon} alt="Figma" />
          </div>
          <div className="hability">
            <img src={vscodeIcon} alt="Visual Studio Code" />
          </div>
          <div className="hability">
            <img src={intellijIcon} alt="IntelliJ" />
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src={EkanshSingh} alt="Ekansh Singh" />
      </div>
    </Container>
  );
}
