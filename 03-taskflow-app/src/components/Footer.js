import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us: taskflow@app.com</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/tasktrackeronline" aria-label="Facebook">📘</a>
          <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ftasktrackersuite.io%2F%3Fhl%3Den&is_from_rle" aria-label="Instagram">📸</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
