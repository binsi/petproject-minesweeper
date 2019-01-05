export class Board {
  constructor (numberOfRows, numberOfColumns, numberOfBombs){
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns; // here we store the # of tiles which haven't been flipped yet
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard(){
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      // write B on board in console if at position is a bomb
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else{
      // write number of neighbouring bombs at position
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    // decrease variable which stores tiles that haven't been flipped
    this._numberOfTiles--;
  }

  // returns integer
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;

    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
      const neighbourRowIndex = rowIndex + offset[0];
      const neighbourColumnIndex = columnIndex + offset[1];
      if (neighbourRowIndex >= 0 && neighbourRowIndex < numberOfRows && neighbourColumnIndex >= 0 && neighbourColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighbourRowIndex][neighbourColumnIndex] == 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs
  }

  // returns boolean
  hasSafeTiles() {
    // check if not equal value or type, false if 5=5
    return this._numberOfTiles !== this._numberOfBombs;
  }

  // logs player board list as visual grid to console
  print() {
    console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
  };

 // returns a multi-dimensional array of empty strings
  static generatePlayerBoard(numberOfRows, numberOfColumns){
    const board = [];
    for (let i = 0; i < numberOfRows; i++){
      const row = [];
      for (let j = 0; j < numberOfColumns; j++){
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  // returns a multi-dimensional array with null and bombs as strings at random positions on board
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs){
    const board = [];
    for (let i = 0; i < numberOfRows; i++){
      const row = [];
      for (let j = 0; j < numberOfColumns; j++){
        row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;
    // fill bomb board with number of bombs provided in construction
    while (numberOfBombsPlaced !== numberOfBombs) {
      // generate random position for current bomb to be placed at
      const randomRowIndex = Math.floor(Math.random() * numberOfRows);
      const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      // place bombs only if field is not yet filled with bomb
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        // Note: Learn about control flow to escape stacking bombs on top of each other.
        numberOfBombsPlaced++;
      }
    }
    return board;
  }

}
