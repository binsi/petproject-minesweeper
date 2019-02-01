'use strict';

var _board = require('./board.js');

var _game = require('./game.js');

jest.mock('./board.js');

beforeEach(function () {
  // Clear all instances and calls to constructor and all methods:
  _board.Board.mockClear();
});

it('We can check if game called the class constructor', function () {
  var game = new _game.Game(3, 3, 3);
  expect(_board.Board).toHaveBeenCalledTimes(1);
});

// it('We can check if the consumer called a method on the class instance', () => {
//   // Show that mockClear() is working:
//   expect(Board).not.toHaveBeenCalled();
//
//   const game = new Game(3,3,3);
//   // Constructor should have been called again:
//   expect(Board).toHaveBeenCalledTimes(1);
//
//   game.playMove();
//   const mockBoardInstance = Board.mock.instances[0];
//   const mockFlipTile = mockBoardInstance.flipTile;
//   expect(mockFlipTile.mock.calls[0][0]).toHaveBeenCalledTimes(1);
// });