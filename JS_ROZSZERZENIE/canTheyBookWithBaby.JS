/**
* @param {number} adultsCount
* @param {number} childrenCount
* @param {number} babiesCount
*
* @returns {boolean}
*/
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
  const roomSpace = adultsCount + childrenCount <= 8;
  const roomSpaceBaby = adultsCount + childrenCount + babiesCount <= 9;
  const isAdult = adultsCount > 0;
  const numberOfBaby = babiesCount <= adultsCount;
  const difference = adultsCount + adultsCount >= childrenCount + babiesCount;

  return roomSpace && roomSpaceBaby && isAdult && numberOfBaby && difference;
}

// SECOND WAY

/* function canTheyBook(
  adultsCount = 0,
  childrenCount = 0,
  babiesCount = 0,
) {
  // At least 1 adult
  if (adultsCount < 1) {
    return false;
  }

  // No more than 1 baby per adult
  if (babiesCount > adultsCount) {
    return false;
  }

  // No more than 2 childrend and babies per adult
  if (childrenCount + babiesCount > 2 * adultsCount) {
    return false;
  }

  const totalCount = adultsCount + childrenCount + babiesCount;

  return (totalCount <= 8) 
			|| (totalCount === 9 && babiesCount > 0);
} */


console.log(canTheyBook(0, 1, 1)); // false - 0 dorosłych, 1 dziecko, 1 maluch. Naruszenie zasad hotelu.
console.log(canTheyBook(2, 3, 1)); // true - 2 dorosłych, 3 dzieci, 1 maluch. Wszystko jest okej.
console.log(canTheyBook(2)); // true - 2 dorosłych. Wszystko jest okej.
console.log(canTheyBook(9)); // false - 9 dorosłych. Maksymalna pojemność pokoju przekroczona.
console.log(canTheyBook(8, 1)); // false - 8 dorosłych, 1 dziecko. Maksymalna pojemność pokoju przekroczona.
console.log(canTheyBook(8, 0, 1)); // true - 8 dorosłych, 0 dzieci, 1 maluch. Wszystko jest okej.
console.log(canTheyBook(4, 2, 3)); // true - 4 dorosłych, 2 dzieci, 3 maluchy. Wszystko jest okej.