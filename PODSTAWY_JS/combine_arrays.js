/**
 * @param {number[]} first
 * @param {number[]} second
 *
 * @returns {number[]}
 */
function combineArrays(first, second) {
    let first = [];
    let second = [];
    let result = [];
  
    for(let i = 0; i < first.length; i++){
      result[i] = first[i] + second[i];
  
  
    }
  return result;
  }
  
  console.log(combineArrays([1, 2, 3]));