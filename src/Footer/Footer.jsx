import React from "react";
import "./Footer.css"; // External CSS for styling
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineLocalMall } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-bottom">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/share/1CvAhiTMSf/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://IndiaMART.in/Qj97y8Xn" target="_blank" rel="noopener noreferrer">
          <MdOutlineLocalMall />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
       
      </div>
    </div>
  );
}

export default Footer;
