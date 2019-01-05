import {Board} from './board.js';
import {Game} from './game.js';
jest.mock('./board.js');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Board.mockClear();
});

it('We can check if game called the class constructor', () => {
  const game = new Game(3,3,3);
  expect(Board).toHaveBeenCalledTimes(1);
});



it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(Board).not.toHaveBeenCalled();

  const game = new Game(3,3,3);
  // Constructor should have been called again:
  expect(Board).toHaveBeenCalledTimes(1);

  game.playMove();
  const mockBoardInstance = Board.mock.instances[0];
  const mockFlipTile = mockBoardInstance.flipTile;
  expect(mockFlipTile.mock.calls[0][0]).toHaveBeenCalledTimes(1);

});
