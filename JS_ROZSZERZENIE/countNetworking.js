/**
 * @param {number} quarantineLength - count of quarantine months
 * @param {number} frequency - networking repeat period
 *
 * @returns {number}
 */
function countNetworking(quarantineLength, frequency) {
    const maxMonth = 12;
    const result = (maxMonth - quarantineLength) / frequency;
  
    return Math.ceil(result);
  }
console.log(countNetworking(3,4));
  