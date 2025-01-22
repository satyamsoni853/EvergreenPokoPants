import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
import './EmailContact.css'

function EmailContact() {
  return (
    <div>
      <div className="contact-details">
          <h1>
            <p className="desc">
              <BiLogoGmail style={{ color: "#00818a" }} />
              <a href="mailto:evergreencare25@gmail.com">
              evergreencare25@gmail.com
              </a>
            </p>
          </h1>
          <p className="desc">
            <MdLocalPhone style={{ color: "#00818a" }} />
            +917081627797
          </p>
        </div>
    </div>
  )
}

export default EmailContact