/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 *
 * @returns {number}
 */
function getArraysSum(arr1, arr2) {

  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] + arr2[i];

  }
  return result;
}

console.log(getArraysSum([1, 2, 3], [2, 5, 4]));
