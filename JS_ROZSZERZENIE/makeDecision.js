/**
 * @param {number} fuelRemaining
 * @param {number} distance
 * @param {number} fuelConsumption
 *
 * @returns {string}
 */
function makeDecision(fuelRemaining, distance, fuelConsumption) {
    const distanceToDrive = (fuelRemaining / fuelConsumption) * 100;
    
    
    if (distance <= 0 | fuelConsumption <= 0 | fuelRemaining < 0) {
      return 'please, enter the valid data';
    }

    if (distance <= distanceToDrive) {
        return 'reach gas station by themselves';
    } else if (distance > distanceToDrive) {
        return 'ask for help';
    }
          
  }
console.log(makeDecision(2, 25, 8)); 