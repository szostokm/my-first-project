/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 *
 * @returns {boolean}
 */
function canTheyBook(adultsCount = 0, childrenCount = 0) {
  const roomSpace = adultsCount + childrenCount;
  const enoughtChildren = adultsCount + adultsCount;

  if (roomSpace > 8) {
    return false;
  } else if (adultsCount < 1) {
    return false;
  } else if (enoughtChildren < childrenCount) {
    return false;
  } else {
    return true;
  }
}
//SPOSÓB OR I AND
/* function canTheyBook(adultsCount = 0, childrenCount = 0) {

  const spaceRoom = adultsCount + childrenCount <= 8;
  const isAdult = adultsCount > 0;
  const difference = adultsCount + adultsCount >= childrenCount;

  return spaceRoom && isAdult && difference; */

console.log(canTheyBook(0, 2)); /* === false - 0 dorosłych, 2 dzieci. Naruszenie zasad hotelu. */
console.log(canTheyBook(1, 3)); /* === false - 1 dorosły, 3 dzieci. Naruszenie zasad hotelu. */
console.log(canTheyBook(2, 4)); /* === true - 2 dorosłych, 4 dzieci. Wszystko jest okej. */
console.log(canTheyBook(2)); /* === true - 2 dorosłych. Wszystko jest okej. */
console.log(canTheyBook(9)); /* === false - 9 dorosłych. Liczba osób przekracza pojemność pokoju. */