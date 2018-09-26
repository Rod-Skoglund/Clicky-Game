# **Clicky-Game**
### The Clicky-Game is a React based memory game. It uses React, the Create-React-App and Yarn packages, HTML, CSS, Bootstrap, javascript and JSX.
### Author: Rod Skoglund
### Date: September 25, 2018

----------------

# **Table Of Contents**
1. Application Introduction
2. Instructions
3. Minimum Requirements
4. Demo
5. Installation

----------------

## **1. Application Introduction**
This application used the create-react-app and yarn to develop this game. On the front end, it uses bootstrap, HTML/CSS and JSX to display the game and respond to user actions. 

The user attempts to select all the peanut characters without selecting a duplicate. TIf you select a character twice before getting them all, you lose. If you select all the characters without selecting one of them twice, you win. The game will keep track of your current game score as well as your top score. The maximum score is 12 (only twelve characters to pick from). 

----------------

## **3. Minimum Requirements**
In order to run this application, you will need the following utilities and packages:
 * create-react-app 
 * yarn
 * The following npm packages:
     * "react": "^16.5.2",
     * "react-dom": "^16.5.2",
     * "react-scripts": "1.1.5"

----------------

## **4. Demo**

The Peanut Clicky Game is deployed to Git Pages. Use the following link to see it in action.

https://rod-skoglund.github.io/Clicky-Game/

----------------

## **5. Installation**

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/Rod-Skoglund/Clicky-Game.git
	
Next, install the application dependencies.

  If you do not have create-react-app and yarn installed, execute the following:
  
    npm install -g create-react-app yarn

  Then do the following:

	cd Clicky-Game
	yarn install

Finally, run the application locally.

	yarn start
	
Now, open the local application on port 3000 at the URL: `http://localhost:3000/`.

Enjoy :smiley: 