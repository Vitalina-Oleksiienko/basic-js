const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const transformedArr = [];

  for (let i = 0; i < arr.length; i +=1) {
    const element = arr[i];

    if (typeof element === 'string' && element.startsWith('--')) {
      const controlSequence = element.substring(2);

      switch (controlSequence) {
        case 'double-next':
          transformedArr.push(arr[i + 1], arr[i + 1]);
          i +=1;
          break;
        case 'discard-prev':
          transformedArr.pop();
          break;
        default:
          break;
      }
    } else {
      transformedArr.push(element);
    }
  }

  return transformedArr;
}

module.exports = {
  transform
};
