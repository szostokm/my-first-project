/**
 * @param {number} side
 * @param {number} diagonal
 *
 * @returns {number | string}
 */
function getRectangleArea(side, diagonal) {
  const secondSide = (diagonal ** 2 - side ** 2);
  const area = side * Math.sqrt(secondSide);

  if (isNaN(area)) {
    return 'not a rectangle';
  }

  if (area === 0.00) {
    return 'not a rectangle';
  } else {
    return Math.round(area * 100) / 100;
  }
}
console.log(getRectangleArea(100,98));
console.log(getRectangleArea(0,0));
console.log(getRectangleArea(45,70));