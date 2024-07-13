import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
              <a href="#home" className="footer__logo">
        Abbas mojarrad
      </a>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/abbas-mojarrad-328141220/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/abbasmojarrad"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abbas mojarrad 2024. All rights reserved.</small>
      </div>
      </div>

    </footer>
  );
};

export default Footer;
