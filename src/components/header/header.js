import Me from "../images/me.jpeg"
import "./header.css";
import SocialMedia from "./social-media";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h2>Viktoriya Kurguzova</h2>
        <h5 className="text-light">Front-End Developer</h5>
        <div className="contact">
        </div>
        <SocialMedia />
        <div className="image">
          <img src={Me} className="me" alt="me" />
        </div>
      </div>
  </header>
  );
}

export default Header;
