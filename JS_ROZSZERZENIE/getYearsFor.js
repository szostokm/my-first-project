/**
 * @param {number} amount
 * @param {number} percent
 * @param {number} limit
 *
 * @returns {number}
 */
function getYears(amount, percent, limit) {
  let i;
  let result = amount;
  const rrso = percent / 100;

  for (i = 1; i < limit; i++) {
    result += result * rrso;

    if (result > limit) {
      return i - 1;
    }
  }
}


 console.log(getYears(1600, 10, 2000)); 
 console.log(getYears(20000, 10, 21000)); 
 console.log(getYears(5000, 5, 6500)); 
console.log(getYears(1800, 11, 1998));

