// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: Title.js
// Description: Defines the Title component that is used to 
//              display the title in the navigation bar.
// ************************************************************

import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children}</h1>;

export default Title;
