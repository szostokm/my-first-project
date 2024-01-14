/**
 * @param {number} number
 *
 * @returns {string}
 */
function isJumping(number) {

    const numberString = number.toString();
  
     if (numberString.length < 2) {
      return 'JUMPING';
      }
    
    for (let i = 1; i < numberString.length; i++) {
      const current = numberString[i];
      const previous = numberString[i - 1];
      const difference = current - previous;
  
      if(difference !== 1 && difference !== -1) {
        return 'NOT JUMPING'
      }
      
    }
    return 'JUMPING'
  }
  // jednocyfrowa liczba
console.log(isJumping(9)); // 'JUMPING'
console.log(isJumping(1234567));  
console.log(isJumping(9643));