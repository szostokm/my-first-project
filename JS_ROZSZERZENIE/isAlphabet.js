/**
 * @param {string} letters
 *
 * @returns {boolean}
 */
function isAlphabet(letters) {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';

  const ciagZnakowLowerCase = letters.toLowerCase();
  const alfabetLowerCase = alfabet.toLowerCase();

  const czyWAlfabecie = ciagZnakowLowerCase.split('').every((znak) => alfabetLowerCase.includes(znak));

  const czyPoKolei = alfabetLowerCase.indexOf(ciagZnakowLowerCase) !== -1;

  if (czyWAlfabecie === true && czyPoKolei === true && ciagZnakowLowerCase !== ''){
  return true;
  }else {
    return false;
  }
}
console.log(isAlphabet('abc'));
console.log(isAlphabet('adhl'));
console.log(isAlphabet(''));
  