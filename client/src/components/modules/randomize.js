/////////////////////////////
// RANDOMIZATION FUNCTIONS //
/////////////////////////////

export const randomize = (n) => { // Simple Math.random() Shortcut :)
    return Math.floor(Math.random() * n);
}

export const shuffleString = (str) => { // Randomizes character order of a string
    let arr = str.split('');
  	let index = arr.length;
    let randomIndex;
    // String to Array > Output randomized Array > Array back to String
  	while (index !== 0) {

    	// Choose from available elements
    	randomIndex = randomize(index);
    	index--;

    	// Swap with current element.
    	[arr[index], arr[randomIndex]] =
      	[arr[randomIndex], arr[index]];
  }
    str = arr.join('');
    
    return str;
}