# Pet Project: Minesweeper
This is a simple console output-only game written in vanilla JavaScript.
The idea behind the pet project is to get back into coding and apply a list of topics that have been taught during the lecture of the module **Advanced Softwareengineering**.
The code is an adaption of a project from an intensive program [Build Front-End Web Applications from Scratch](http://pro.codecademy.com/intensive/build-frontend-webapps-from-scratch/ "Codecademy Program Reference") found on Codecademy, in which I participated to learn JavaScript earlier in 2018.

## The Game
The game is a console only game and the project code can be executed using *node*.
Each game can be initialized with dimensions of the users choice. It can be a small squared 3x3 game board or a
rectangle of any form.

Example: initialize, loose and win the game:
![new game](images/newgame.png "New game initialized")
![game lost](images/gameover.png "Game was lost")
![game won](images/gamewon.png "Game was won")

### How to play
After you have successfully pulled the project from this repository, open a terminal on your local machine and navigate to the lib directory. Now run the following commands:

To start the game
1. node
2. .load game.js (to load the contents of this file)
3. let game = new Game(3, 3, 3); (create a Game instance with Game(numberOfRows, numberOfColumns, numberOfBombs))

To play the game
4. Run commands like so:
..* game.playMove(0, 1);
..* game.playMove(1, 2);

to exit the game when done playing
5. .exit

## UML Diagrams
## Metrics
[![Sonarcloud](https://sonarcloud.io/api/project_badges/measure?project=binsi_petproject-minesweeper&metric=alert_status)](https://sonarcloud.io/dashboard?id=binsi_petproject-minesweeper)
Sonarcloud: [Click here](https://sonarcloud.io/dashboard?id=binsi_petproject-minesweeper "Go to Sonarcloud")
## Clean Code
## Build Management
## Continuous Delivery
Travic CI: [Click here](https://travis-ci.com/binsi/petproject-minesweeper "Go to Travis CI")
## AOP
## DSL
## Functional Programming
## Logical Solver
## Code Fragment
