import React, { Component } from "react";
import styles from "./Header.scss";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import loti from "./images/LOTI.jpg";

class Header extends Component {
  render() {
    return (
      <nav id="navBar">
        <img src={loti} id="logo" alt="LOTI logo"></img>
        <ul>
          <li>HOME</li>
          <li>NEWS</li>
          <li>WHAT'S ON</li>
          <li>EAT + DRINK</li>
          <li>LIFESTYLE</li>
          <li>SWAG</li>
          <li>ESCAPES</li>
          <li>CHRISTMAS</li>
          <FontAwesomeIcon icon={faBars} id="bars" />
        </ul>
      </nav>
    );
  }
}

export default Header;
