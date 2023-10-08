import "./Header.css";
import github from "./GitHubLogo.png";
import linkedin from "./LinkedInLogo.png";
import email from "./EmailLogo.png";

function Header() 
{
  return (
    <div>
      <header className="header">
          Grace Elias
        <section className="logos">
          <a href= "https://github.com/graceelias" > <img src={github} className="logo"/> </a>
          <a href="https://www.linkedin.com/in/grace-elias-87b165233/"> <img src={linkedin} className="logo"/> </a>
          <a href="mailto:gelias1111@gmail.com"> <img src={email} className="logo"/> </a>
        </section>
      </header> 
    </div>
  );
}


export default Header;