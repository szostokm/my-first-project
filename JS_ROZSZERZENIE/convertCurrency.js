/**
 * @param {number} amount
 * @param {number} exchangeRate
 * @param {string} currencyName
 *
 * @returns {string}
 */
function convertCurrency(amount, exchangeRate, currencyName) {
    const result = amount * exchangeRate;
  
    if (isNaN(result)) {
      return 'Enter valid data';
    } else if (amount <= 0 | exchangeRate <= 0) {
      return 'Enter valid data';
    } else {
      return `Give them ${Math.round(result * 100) / 100} ${currencyName}('s)`;
    }
  }
  

console.log(convertCurrency(1000, 0.037, 'dollar'));
console.log(convertCurrency(-145, 0.55, 'ruble'));
console.log(convertCurrency(-345, -4.7, 'euro'));
console.log(convertCurrency(650, 0, 'bolivar'));
