/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Navbarr.css";
import Logo from "../Images/Evergreen Care.png";
import Logo2 from "../Images/Logo2.png";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

function Navbarr() {
  const [showsidebarr, setshowsidebarr] = useState(true);

  const handleHamBurger = () => {
    setshowsidebarr(!showsidebarr); // Corrected the logic
  };

  return (
    <div>
      <nav className="Navbarr">
        <ul>
          <li>
            <Link to="/babydiper">Baby Diper</Link>
          </li>
          <li>
            <Link to="/Pads">Pads</Link>
          </li>
          <li>
            <Link to="/Adultdiper">Adult Diper</Link>
          </li>
          <li className="logo-container">
            <Link to="/">
              {/* {showsidebarr? <img src={Logo} alt="" />: <img src={Logo2} alt="" /> } */}
              <img src={Logo} alt="Evergreen Care Logo" className="logo" />
              <img src={Logo2} alt="Evergreen Care Logo" className="logo2" />
            </Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cimenubarr" onClick={handleHamBurger}>
            {showsidebarr ? <CiMenuBurger /> : <IoCloseSharp />}
          </li>
        </ul>
      </nav>
      {showsidebarr ? null : (
        <div>
          <ul className="close-barr">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbarr;
