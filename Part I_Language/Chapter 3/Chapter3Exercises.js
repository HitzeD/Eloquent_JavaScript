// Chapter 3 Exercises on page 56
// 1) create function that use Math.min and finds the lowest number
function mathMin(a, b){
	return Math.min(a, b);
}

mathMin(2, 30); // --> 2

// same end result, using arrow function instead ----------------
const mathMin = (a, b) => {return Math.min(a, b)};

mathMin(2, 30); // --> 2

// 2)

function isEven(n) {
    if(n == 0){
        return true;
    } else if(n == 1){
        return false;
    } else if(n < 0){
        return isEven(-n);
    } else{
        return isEven(n - 2);
    }
  }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


// 3) 

function countChar(str, char){
    // let count = 0;
    for(let i = 0; i < str.length; i++){
        let count = 0;
        if(i == char){
            count++;           
        };
        return count;
    };
}

  console.log(countChar("kakkerlak", "k"));
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4

