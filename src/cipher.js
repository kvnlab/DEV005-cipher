"use strict"

/**
 * MEMO LIST
 */
const LETTERS = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],

  /**
   * create array letters with slice the num times
   */
  getLetters = (num) => {
    const _mod = num % LETTERS.length,
      _startLetters = LETTERS.slice(_mod),
      _endLetters = LETTERS.slice(0, _mod);

    return [
      ..._startLetters,
      ..._endLetters
    ];
  },

  /**
   * "translate" the letter to "expected letter"
   */
  getLetterFromTo = (lettersFrom, lettersTo, letter) => {
    const _index = lettersFrom.indexOf(letter),
      _exists = _index > -1;

    return _exists ? lettersTo[_index] : letter;
  },

  /**
   * translate message from array "from" to array "to"
   */
  execute = (from, to, message) =>
    message
      .split('')
      .map(getLetterFromTo.bind(null, from, to))
      .join(''),

  cipher = {

    encode: (num, message) => {
      const _newLetters = getLetters(num);
      return execute(LETTERS, _newLetters, message.toUpperCase());
    },

    decode: (num, message) => {
      const _newLetters = getLetters(num);
      return execute(_newLetters, LETTERS, message.toUpperCase());
    }
  };

export default cipher;
