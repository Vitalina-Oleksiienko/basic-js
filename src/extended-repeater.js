const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const defaults = {
    repeatTimes: 1,
    separator: '',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '',
  };

  const {
    repeatTimes = defaults.repeatTimes,
    separator = defaults.separator,
    addition = defaults.addition,
    additionRepeatTimes = defaults.additionRepeatTimes,
    additionSeparator = defaults.additionSeparator,
  } = options;

  let repeatedStr = '';

  for (let i = 0; i < repeatTimes; i +=1) {
    repeatedStr += str;

    if (addition) {
      for (let j = 0; j < additionRepeatTimes; j +=1) {
        repeatedStr += additionSeparator + addition;
      }
    }

    if (i < repeatTimes - 1) {
      repeatedStr += separator;
    }
  }

  return repeatedStr;
}

module.exports = {
  repeater
};
