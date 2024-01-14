/**
 * @param {string} guestsInput
 *
 * @returns {number}
 */
// write code here
function getGuestsCount(guestsInput) {
  const input = parseInt(guestsInput);

  if (!isNaN(input)) {
    return input;
  } else {
    return 'not a number';
  }
}

/* function getGuestsCount(guestsInput) {
  const guestsNumber = parseInt(guestsInput);

  return isNaN(guestsNumber)
    ? 'not a number'
    : guestsNumber;
} */


 

console.log(getGuestsCount('Two')); /* === 'not a number' */
console.log(getGuestsCount(`'I'll 1'`)); /* === 'not a number' */
console.log(getGuestsCount('3 people')); /* === 3 */
console.log(getGuestsCount('One dog and 2 people')); /* === 'not a number' */