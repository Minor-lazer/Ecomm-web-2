import React from "react";
import "./Footer.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className="footer">
      {/* <p className="footer-text">Follow us on:</p> */}
      <ul className="footer-links">
        <li>
        <FontAwesomeIcon icon={faCoffee} color="black"/>
        </li>
        <li>
        <FontAwesomeIcon icon={faCoffee} color="black"/>
        </li>
        <li>
        <FontAwesomeIcon icon={faCoffee} color="black"/>
        </li>
        <li>
        <FontAwesomeIcon icon={faCoffee} color="black"/>
        </li>
      </ul>
    </footer>
  );
}
