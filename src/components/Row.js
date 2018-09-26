// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: Row.js
// Description: Defines the Row component that is used to 
//              display row on the page.
// ************************************************************

import React from "react";

const Row = props => (
  <div className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default Row;
