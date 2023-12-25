const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i +=1) {
    if (str[i] === currentChar) {
      count +=1;
    } else {
      encodedStr += count + currentChar;
      currentChar = str[i];
      count = 1;
    }
  }

  encodedStr += count + currentChar;

  return encodedStr;
}

module.exports = {
  encodeLine
};
