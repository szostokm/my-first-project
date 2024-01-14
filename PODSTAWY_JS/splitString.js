/**
 * @param {string} str
 *
 * @returns {string[]}
 */
function splitString(str) {
    // Jeśli długość ciągu jest nieparzysta, dodaj znak '_'
    if (str.length % 2 !== 0) {
      str += '_';
    }
  
    // Dziel ciąg na dwuznakowe elementy i umieść je w tablicy
    const result = [];
    for (let i = 0; i < str.length; i += 2) {
      result.push(str.slice(i, i + 2));
    }
  
    return result;
  }
  
  // Przykłady użycia:
  const inputStr = "abcdef";
  const output = splitString(inputStr);
  console.log(output);  // Wynik: ['ab', 'cd', 'ef']
  
  const inputStr2 = "abcde";
  const output2 = splitString(inputStr2);
  console.log(output2);  // Wynik: ['ab', 'cd', 'e_']