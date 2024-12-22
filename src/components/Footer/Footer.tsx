import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
// import telegram from '../../assets/telegram.svg'
// import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="" className="logo">
        <span>Ekansh</span>
        <span>Singh</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          { <span>❤️</span> }
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/ekanshsinghin"
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
          href="https://api.whatsapp.com/send/?phone=%2B916393497459&text=Hello+Ekansh"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
      
      </div>
    </Container>
  )
}
