import React from "react";
import LinkedIn from "../../images/linkedinlogo2.png";
import GitHub from "../../images/githublogo2.png";
import Email from "../../images/maillogo2.png";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h1 className="copyright">&copy; 2020 Nathan Blanchard</h1>
        <section className="links">
          <a href="https://www.linkedin.com/in/nathan-blanchard-35815024/">
            <img src={LinkedIn} className="icon" alt="LinkedIn logo"></img>
          </a>
          <a href="https://github.com/NGBlanchard">
            <img src={GitHub} className="icon" alt="GitHub logo"></img>
          </a>
          <a href="mailto:ngblanchard@gmail.com">
            <img src={Email} className="icon" alt="Email logo"></img>
          </a>
        </section>
      </footer>
    );
  }
}

export default Footer;
