/**
 * @param {string} letters
 *
 * @returns {boolean}
 */
function isAlphabet(letters) {
  const alphabetText = 'abcdefghijklmnopqrstuvwxyz';

  if (letters === '') {
    return false;
  }

  for (let i = 0; i < letters.length; i++) {
    const lettersToLower = letters.toLocaleLowerCase();
    const alfabetToLower = alphabetText.toLocaleLowerCase();
    const czyZawiera = alfabetToLower.includes(lettersToLower);
    const czyPoKolei = alfabetToLower.indexOf(lettersToLower) !== -1;

    if (czyZawiera === false && czyPoKolei === false && lettersToLower !== '') {
      return false;
    }
    console.log(arguments);
  }
 
  return true;
}
console.log(isAlphabet('abc'));
console.log(isAlphabet('abcdefg'));
console.log(isAlphabet('acd'));
console.log(isAlphabet(''));