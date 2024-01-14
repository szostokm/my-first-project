/**
 * @param {string|number} maxSolved
 * @param {string|number} romanSolved
 *
 * @returns {string}
 */
function getWinner(maxSolved, romanSolved) {
	if (+maxSolved === +romanSolved) {
	return 'Roman and Maxim are the winners!!!'; 
	}

	return +maxSolved > +romanSolved
		? 'Max is the winner!!!'
		: 'Roman is the winner!!!';
};
console.log(getWinner(35, 25));

/* function getWinner(maxSolved, romanSolved) {
	const max = Number(maxSolved);
	const roman = Number(romanSolved);
  
	if (max > roman) {
	  return 'Max is the winner!!!';
	} else if (max < roman) {
	  return 'Roman is the winner!!!';
	} else if (max === roman) {
	  return 'Roman and Maxim are the winners!!!';
	}
  }
   */