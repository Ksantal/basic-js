const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/*matrix*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  /*let gameField = [];
  let gameFieldRow = [];
  let matrixLength;
  let matrixWidth;
  for (let i = 0; i < matrix.length; i++) {
    gameFieldRow = []
    for (let j = 0; j < matrix[i].length; j++){
      gameFieldRow.push(0);
    }
    gameField.push(gameFieldRow);
    
    matrixWidth =  matrix[i].length;
  }
  matrixLength = matrix.length;
  
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++) {

      if(matrix[i][j]===true) {
        let previousRow = i-1;
        let nextRow = i+1;
        let previousColumn = j-1;
        let nextColumn = j + 1;
        
        gameField[i][j] += 1;
        if (previousRow > 0){
          gameField[previousRow][j] += 1;
         };
         if (i===0 && j===0) {
          gameField[i][nextColumn] += 1;
          gameField[nextRow][nextColumn] += 1;
          gameField[nextRow][j] += 1;
         } else if( i===0 && j===matrixWidth){
          gameField[i][previousColumn] += 1;
          gameField[nextRow][previousColumn] += 1;
          gameField[nextRow][j] += 1;
         } else if(i===matrixLength && j===matrixWidth) {
          gameField[previousRow][j] += 1;
          gameField[previousRow][previousColumn] += 1;
          gameField[i][previousColumn] += 1;
         } else if (i===matrixLength && j===0) {
          gameField[previousRow][j] += 1;
          gameField[previousRow][nextColumn] += 1;
          gameField[i][nextColumn] += 1;
         } else if(i===0 && j!==0 && j!==matrixWidth) {
          gameField[i][previousColumn] += 1;
          gameField[nextRow][previousColumn] += 1;
          gameField[nextRow][j] += 1;
          gameField[nextRow][nextColumn] += 1;
          gameField[i][previousColumn] += 1;
         } else if(i!==0 && i!==matrixLength && j==matrixWidth) {
          gameField[previousRow][j] += 1;
          gameField[previousRow][previousColumn] += 1;
          gameField[i][previousColumn] += 1;
          gameField[nextRow][previousColumn] += 1;
          gameField[nextRow][j] += 1;
         } else if(i===matrixLength && j!==0 && j!==matrixWidth) {
          gameField[i][previousColumn] += 1;
          gameField[previousRow][previousColumn] += 1;
          gameField[previousRow][j] += 1;
          gameField[previousRow][nextColumn] += 1;
          gameField[i][nextColumn] += 1;
         } else if(i!==0 && i!==matrixLength && j===0) {
          gameField[previousRow][j] += 1;
          gameField[previousRow][nextColumn] += 1;;
          gameField[i][nextColumn] += 1;
          gameField[nextRow][nextColumn] += 1;
          gameField[nextRow][j] += 1;
         } else {
          gameField[previousRow][j] += 1;
          gameField[previousRow][nextColumn] += 1;
          gameField[i][nextColumn] += 1;
          gameField[nextRow][nextColumn] += 1;
          gameField[nextRow][j] += 1;
          gameField[nextRow][previousColumn] += 1;
          gameField[i][previousColumn] += 1;
          gameField[previousRow][previousColumn] += 1;

         }
        

      }
    }

  }

   
   return gameField;*/
}

module.exports = {
  minesweeper
};
