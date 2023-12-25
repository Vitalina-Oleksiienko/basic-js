const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const teamName = [];

  for (const member of members) {
    if (typeof member === 'string' && member.trim()) { 
      teamName.push(member[0].toUpperCase()); 
    } else {
      return false;
    }
  }

  return teamName.join('');
}

module.exports = {
  createDreamTeam
};
