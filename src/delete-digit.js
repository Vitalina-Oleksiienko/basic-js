const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  let maxNumber = -Infinity;

  for (let i = 0; i < nStr.length; i++) {
    const newNumberStr = nStr.slice(0, i) + nStr.slice(i + 1);
    const newNumber = parseInt(newNumberStr);
    maxNumber = Math.max(maxNumber, newNumber);
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
