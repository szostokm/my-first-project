/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 * @param {number} babiesCount
 *
 * @returns {string}
 */
function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const totalGuest = adultsCount + childrenCount + babiesCount;
  let total = '';
  let baby = '';

  if ((totalGuest === 5 || totalGuest === 9) && babiesCount > 0) {
    baby = ' + extra bed';
  }

  if (babiesCount > 0 && totalGuest <= 5) {
    total = 'small room';
  } else if (babiesCount === 0 && totalGuest <= 4) {
    total = 'small room';
  } else if (babiesCount > 0 && totalGuest <= 9) {
    total = 'big room';
  } else if (babiesCount === 0 && totalGuest <= 8) {
    total = 'big room';
  }

  return total + baby;
}


/* function recommendRoom(
  adultsCount = 0,
  childrenCount = 0,
  babiesCount = 0,
) {
  const totalCount = adultsCount + childrenCount + babiesCount;

  if (totalCount <= 4) {
    return 'small room';
  }

  if (totalCount === 5 && babiesCount > 0) {
    return 'small room + extra bed';
  }

  if (totalCount <= 8) {
    return 'big room';
  }

  // we are given only valid data, so we don't need to check it again
  return 'big room + extra bed';
}
 */

console.log(recommendRoom(2, 2, 1)); 
console.log(recommendRoom(2, 1, 1)); 
console.log(recommendRoom(3, 2));  
console.log(recommendRoom(3, 0, 2)); 
console.log(recommendRoom(7, 0, 2));
console.log(recommendRoom(8));