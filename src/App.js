// ************************************************************
// Program: Peanut Clicky Game
// Authors: Rod Skoglund
// File: App.js
// Description: Defines the App that is that makes up the game.
// ************************************************************

import React, { Component } from 'react';
import peanuts from "./peanuts.json";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import './App.css';

function shufflePeanuts(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  // Set the initial state
  state = {
    peanuts,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
      alert("Congrats - You win \n Select any tile to reset the game.");
    }
    this.handleShuffle();
  };

  handleReset = () => {
    let newMsg = "";
    if (this.state.currentScore === 12) {
      newMsg = "";
    } else {
        newMsg = "You guessed incorrectly!";
    }
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: newMsg,
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledPeanuts = shufflePeanuts(peanuts);
    this.setState({ peanuts: shuffledPeanuts });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Peanuts Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Try to click on each character once and only once. 
        </Title>

        <Container>
          <Row>
            {this.state.peanuts.map(peanut => (
              <Col size="md-3 sm-6">
                <FriendCard
                  key={peanut.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={peanut.id}
                  image={peanut.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
