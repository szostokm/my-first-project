/**
 * @param {number} number
 *
 * @returns {boolean[]}
 */
function checkNumber(number) {
  
    let result = [];
  
    if(number > 0) {
      result.push(true); 
    }
    else result.push(false);
  
    if(number % 2 == 0) {
      result.push(true);
    }
    else result.push(false);
    if(number % 10 == 0 ) {
      result.push(true);
    }
    else result.push(false);
  
    return result;
  }
  

  console.log(checkNumber(5));
  