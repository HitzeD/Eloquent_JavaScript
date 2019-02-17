// Chapter 3 Exercises on page 56
// 1) create function that use Math.min and finds the lowest number
function mathMin(a, b){
	return Math.min(a, b);
}

mathMin(2, 30); // --> 2

// same end result, using arrow function instead ----------------
const mathMin = (a, b) => {return Math.min(a, b)};

mathMin(2, 30); // --> 2

// 2) 0 = even, 1 is odd, any other num(n), its eveness is the same as n-2

// 3) 
