// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: Wrapper.js
// Description: Defines the Wrapper component that is used to 
//              display the page body for the game.
// ************************************************************

import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;
