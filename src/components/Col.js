// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: Col.js
// Description: Defines the Col component that is used to 
//              display column on the page.
//              This Col component provides the convenience of 
//              being able to set a column's "size" prop 
//              instead of its className and omit the col- at 
//              the start of each Bootstrap col class, e.g. 
//              size="md-12" instead of className="col-md-12"
// ************************************************************

import React from "react";

const Col = props => {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  return (
    <div className={size}>
      {props.children}
    </div>
  );
};

export default Col;
