'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
  function Board(numberOfRows, numberOfColumns, numberOfBombs) {
    _classCallCheck(this, Board);

    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns; // here we store the # of tiles which haven't been flipped yet
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  _createClass(Board, [{
    key: 'flipTile',
    value: function flipTile(rowIndex, columnIndex) {
      if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
        console.log('This tile has already been flipped!');
        return;
      } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
        // write B on board in console if at position is a bomb
        this._playerBoard[rowIndex][columnIndex] = 'B';
      } else {
        // write number of neighbouring bombs at position
        this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
      }
      // decrease variable which stores tiles that haven't been flipped
      this._numberOfTiles--;
    }

    // returns integer

  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(rowIndex, columnIndex) {
      var _this = this;

      var neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
      var numberOfRows = this._bombBoard.length;
      var numberOfColumns = this._bombBoard[0].length;

      var numberOfBombs = 0;

      neighborOffsets.forEach(function (offset) {
        var neighbourRowIndex = rowIndex + offset[0];
        var neighbourColumnIndex = columnIndex + offset[1];
        if (neighbourRowIndex >= 0 && neighbourRowIndex < numberOfRows && neighbourColumnIndex >= 0 && neighbourColumnIndex < numberOfColumns) {
          if (_this._bombBoard[neighbourRowIndex][neighbourColumnIndex] == 'B') {
            numberOfBombs++;
          }
        }
      });
      return numberOfBombs;
    }

    // returns boolean

  }, {
    key: 'hasSafeTiles',
    value: function hasSafeTiles() {
      // check if not equal value or type, false if 5=5
      return this._numberOfTiles !== this._numberOfBombs;
    }

    // logs player board list as visual grid to console

  }, {
    key: 'print',
    value: function print() {
      console.log(this._playerBoard.map(function (row) {
        return row.join(' | ');
      }).join('\n'));
    }
  }, {
    key: 'playerBoard',
    get: function get() {
      return this._playerBoard;
    }
  }], [{
    key: 'generatePlayerBoard',


    // returns a multi-dimensional array of empty strings
    value: function generatePlayerBoard(numberOfRows, numberOfColumns) {
      var board = [];
      for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
          row.push(' ');
        }
        board.push(row);
      }
      return board;
    }

    // returns a multi-dimensional array with null and bombs as strings at random positions on board

  }, {
    key: 'generateBombBoard',
    value: function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
      var board = [];
      for (var i = 0; i < numberOfRows; i++) {
        var row = [];
        for (var j = 0; j < numberOfColumns; j++) {
          row.push(null);
        }
        board.push(row);
      }
      var numberOfBombsPlaced = 0;
      // fill bomb board with number of bombs provided in construction
      while (numberOfBombsPlaced !== numberOfBombs) {
        // generate random position for current bomb to be placed at
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        // place bombs only if field is not yet filled with bomb
        if (board[randomRowIndex][randomColumnIndex] !== 'B') {
          board[randomRowIndex][randomColumnIndex] = 'B';
          // Note: Learn about control flow to escape stacking bombs on top of each other.
          numberOfBombsPlaced++;
        }
      }
      return board;
    }
  }]);

  return Board;
}();