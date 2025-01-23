import React from "react";
import "./Footer.css"; // External CSS for styling
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineLocalMall } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* Added Product and Contact options */}
      <div className="footer-top">
        <Link to="/Product" className="text-orange-500 text-xl transition-colors duration-300 hover:text-green-800" >Product</Link>
        <Link to="/contact" className="text-green-500 text-xl transition-colors duration-300 hover:text-orange-800" >Contact</Link>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Evergreenccare. All rights reserved.</p>
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
