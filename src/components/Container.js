// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: Container.js
// Description: Defines the Contaner component that is used to 
//              display the rows/columns and the 12 tiles that 
//              make up the game..
// ************************************************************

import React from "react";

const Container = props => (
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>
);

export default Container;
