const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !Number.isFinite(parseFloat(sampleActivity))) {
    return false;
  }

  const currentActivity = parseFloat(sampleActivity);
  const age = HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY / currentActivity) / Math.log(2);

  return age;
}

module.exports = {
  dateSample
};
