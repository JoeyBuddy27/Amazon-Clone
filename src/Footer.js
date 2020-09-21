import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__backToTop">
        <p
          href=""
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top
        </p>
      </div>
      <div className="footer__section">
        <div className="footer__section1">
          <h4>Get To Know Us</h4>
          <li>Careers</li>
          <li>About Us</li>
          <li>Sustainability</li>
        </div>
        <div className="footer__section2">
          <h4>Make Money With Us</h4>
          <li>Careers</li>
          <li>About Us</li>
          <li>Sustainability</li>
          <li>Careers</li>
          <li>About Us</li>
          <li>Sustainability</li>
        </div>
        <div className="footer__section3">
          <h4>Amazon Payment Methods</h4>
          <li>Careers</li>
          <li>About Us</li>
          <li>Sustainability</li>
        </div>
        <div className="footer__section4">
          <h4>Let Us Help You</h4>
          <li>Careers</li>
          <li>About Us</li>
          <li>Sustainability</li>
        </div>
      </div>
      <hr />
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="AMazon Logo"
        />
      </a>
    </div>
  );
}

export default Footer;
