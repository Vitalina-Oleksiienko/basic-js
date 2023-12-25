const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(text, key) {
    return this.transform(text, key, this.direct);
  }

  decrypt(text, key) {
    return this.transform(text, key, !this.direct);
  }

  transform(text, key, direct) {
    const cipher = [];
    let keyIndex = 0;

    for (let i = 0; i < text.length; i +=1) {
      const char = text[i].toUpperCase();
      const keyChar = key[keyIndex % key.length].toUpperCase();

      if (alphabet.includes(char)) {
        const shift = alphabet.indexOf(keyChar);
        const newIndex = direct
          ? (alphabet.indexOf(char) + shift) % 26
          : (alphabet.indexOf(char) - shift + 26) % 26;
        cipher.push(alphabet[newIndex]);
      } else {
        cipher.push(char);
      }

      keyIndex +=1;
    }

    return cipher.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
