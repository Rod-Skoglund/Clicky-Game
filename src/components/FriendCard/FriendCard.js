// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: FriendCard.js
// Description: Defines the FriendCard component that is used 
//              to display a card/tile.
// ************************************************************

import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;