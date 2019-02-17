// 1) exercise on pg 37.



// function triangle(num){
//     let hash = '#';
//     for(i = 0; i >= num; i++){
//         hash.repeat(i);
//         console.log(hash);
//     };
//     console.log(hash);
// }

// triangle(7);

// This is the correct method!!! exercise on pg 37. ---------------------
function forLoops(){
    let hash = '#';
    for(let i = 0; i <= 7; i++){
        console.log(hash.repeat(i));
    };
};

// Arrow Function syntax
forLoops = () =>{
    let hash = '#';
    for(let i = 0; i <= 7; i++){
        console.log(hash.repeat(i));
    };
}

// 2)  this is correct!

function fizzBuzz(){
    for(i = 0; i <= 100; i++){
		if((i % 3 === 0) && (i % 5 === 0)){
			console.log('FizzBuzz')
		} else if (i % 3 === 0){
            console.log('Fizz');
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i);
        }
    };
}

fizzBuzz();

// using Arrow Function
fizzBuzz = () =>{
    for(i = 0; i <= 100; i++){
		if((i % 3 === 0) && (i % 5 === 0)){
			console.log('FizzBuzz')
		} else if (i % 3 === 0){
            console.log('Fizz');
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i);
        }
    };
}

// 3) this is correct!

function chessBoard(num) {
	let size = num / 2;
	const on = " # " + "   ";
	const off = "   " + " # ";
	const newLine = '\n';
	let reon = on.repeat(size), reoff = off.repeat(size);
	const both = reon + newLine + reoff + newLine;
	console.log(both.repeat(size));
}
chessBoard(16);

//  arrow function

chessBoard = num =>{
    let size = num / 2;
	const on = " # " + "   ";
	const off = "   " + " # ";
	const newLine = '\n';
	let reon = on.repeat(size), reoff = off.repeat(size);
	const both = reon + newLine + reoff + newLine;
	console.log(both.repeat(size));
}

chessBoard(16);














