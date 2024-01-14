/**
 * @param {number} n
 *
 * @returns {string}
 */
function isSpecialNumber(n) {
    const nString = n.toString();
    
    for(let i = 0; i < nString.length; i++) {
      if(nString[i] > 5 ) {
        return 'NOT!!'
  
      }
    }
    return 'Special!!'
  }

  console.log(isSpecialNumber(2));
  console.log(isSpecialNumber(9));
  console.log(isSpecialNumber(23));
  console.log(isSpecialNumber(38));