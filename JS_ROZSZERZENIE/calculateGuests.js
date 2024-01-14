/**
 * @param {string} guestsInput
 *
 * @returns {number|string}
 */
function calculateGuests(guestsInput) {
  const EMPTY_MESSAGE = 'not a number';

  for (let i = 0; i < guestsInput.length; i++) {
    const ch = guestsInput[i];

    if ('0123456789'.includes(ch)) {
      // take the first found integer
      return Number(guestsInput.slice(i))
        || EMPTY_MESSAGE;
      
    }
  }

  // if no digits were found in the loop
  return EMPTY_MESSAGE;
}
console.log(calculateGuests('0'));
console.log(calculateGuests(' Aasdasdas sadasd 123'));