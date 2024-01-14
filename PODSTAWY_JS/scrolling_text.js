/**
 * @param {string} word
 *
 * @returns {string[]}
 */
function scrollingText(word) {
  let scroll = [];
  let temp = word;
  for(let i = 1; i <= word.length; i++){
    scroll.push(temp.toUpperCase());
    temp = word.slice(i, word.length) + word.slice(0, i);
  }
  return scroll;
}
console.log(scrollingText('robot'));