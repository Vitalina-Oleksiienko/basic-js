const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const INCORRECT_RESULT_MSG = 'Unable to determine the time of year!';
  const INVALID_DATE_ERROR = 'Invalid date!';

  if (!date) {
    return INCORRECT_RESULT_MSG;
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error(INVALID_DATE_ERROR);
  }

  try {
    const month = date.getMonth();

    if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else if (month >= 8 && month <= 10) {
      return 'autumn';
    } else {
      return 'winter';
    }
  } catch {
    throw new Error(INVALID_DATE_ERROR);
  }
}

module.exports = {
  getSeason
};

