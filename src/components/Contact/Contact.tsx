import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ekanshsingh.in@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ekanshsingh.in@gmail.com">ekanshsingh.in@gmail.com</a>
        </div>
        <div>
        <a href="mailto:esingh3_be22@thapar.edu"><img src={emailIcon} alt="Phone No" /></a>
          <a href="mailto:esingh3_be22@thapar.edu">esingh3_be22@thapar.edu</a>
        </div>  
      </div>
      
    </Container>
  )
}