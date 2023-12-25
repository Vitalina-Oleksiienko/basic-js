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
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

  for (let i = 0; i < rows; i +=1) {
    for (let j = 0; j < cols; j +=1) {
      if (matrix[i][j]) {
        result[i][j] = -1;
      } else {
        const minesAround = countMinesAround(matrix, i, j, rows, cols);
        result[i][j] = minesAround;
      }
    }
  }

  return result;
}

function countMinesAround(matrix, i, j, rows, cols) {
  let count = 0;
  for (let di = -1; di <= 1; di +=1) {
    for (let dj = -1; dj <= 1; dj +=1) {
      const ni = i + di;
      const nj = j + dj;
      if (
        0 <= ni && ni < rows &&
        0 <= nj && nj < cols &&
        matrix[ni][nj]
      ) {
        count +=1;
      }
    }
  }
  return count;
}

module.exports = {
  minesweeper
};
