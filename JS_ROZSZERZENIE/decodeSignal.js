/**
 * @param input
 *
 * @returns {number}
 */
const decodeSignal = (input) => +!!input;

console.log(decodeSignal('abc')) //=== 1
console.log(decodeSignal('1')) //=== 1
console.log(decodeSignal(0)) //=== 0
console.log(decodeSignal('')) //=== 0
console.log(decodeSignal(null)) // === 0
