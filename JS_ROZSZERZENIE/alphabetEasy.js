/**
 * @param {string} letters
 *
 * @returns {boolean}
 */
function isAlphabet(letters) {
  if (letters.length === 0) {
    return false;
  }
console.log(arguments);
  // check if the letters are the part of the alphabet
  return 'abcdefghijklmnopqrstuvwxyz'.includes(
    letters.toLowerCase(),
  );
}

console.log(isAlphabet('abc'));
console.log(isAlphabet('abcdefg'));
console.log(isAlphabet('acd'));
console.log(isAlphabet('KLMN'));
console.log(isAlphabet('WXYZ'));
