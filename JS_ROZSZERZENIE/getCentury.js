
/**
 * @param {number} year
 *
 * @returns {number}
 */
function getCentury(year) {
    if (year < 100) {
      return 1;
    }
  
    const numberOfCenutry = year / 100;
  
    return Math.ceil(numberOfCenutry);
  }
  
console.log(getCentury(1));
console.log(getCentury(0));
console.log(getCentury(1768));
