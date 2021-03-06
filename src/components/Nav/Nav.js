// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: Nav.js
// Description: Defines the Nav component that is used to 
//              display the navigation bar.
// ************************************************************

import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/Clicky-Game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;