/**
 * @param {number} startProduction
 * @param {number} numberOfMonths
 * @param {number} percent
 *
 * @returns {number[]}
 */
function getPlan(startProduction, numberOfMonths, percent) {
    const goals = [];
    let currentProduction = startProduction;
  
    for (let i = 0; i < numberOfMonths; i++) {
      // increase is calculated based on currentProduction (not start)
      currentProduction += Math.floor(currentProduction * (percent / 100));
      goals.push(currentProduction);
    }
  
    return goals;
  }
  console.log(getPlan(10, 4, 30));
  console.log(getPlan(1000, 6, 20));