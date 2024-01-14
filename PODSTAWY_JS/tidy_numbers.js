/**
 * @param {number} number
 *
 * @returns {boolean}
 */
function isTidy(number) {
    const numberString = number.toString();
  
    if(numberString < 2) {
      return true;
    }
  
    for(let i = 1; i < numberString.length; i++) {
      const current = numberString[i];
      const previous = numberString[i - 1];
      
       
       if(current < previous) {
        return false;
      }
    }
    return true;
  }

console.log(isTidy(12)); 
console.log(isTidy(32));  
console.log(isTidy(1024));