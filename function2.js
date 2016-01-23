// function sum(num1,num2){
// 	return num1+num2;
// }
// console.log(sum(6,9));

// function isEqual(n1,n2){
// 	if(n1===n2){
// 		console.log("TRUE");
// 		return true;
// 	}
// }
// console.log (isEqual(2,2));

// function isEven(num){
// 	if (num % 2 === 0) {
// 		console.log("TRUE");
// 		return true;
// 	}
// }
// console.log (isEven(4));

// function isDivis(n1, n2){
// 	if (n1%n2===0){
// 		console.log("TRUE");
// 		return true;
// 	}
// }
// console.log (isDivis(4,2));

// function discountPrec(amount, disc){
// 	if (disc > 100 || disc < 0) {
// 		console.log("WARNING");
// 	}
// 	return amount * disc/100;
// }
// console.log(discountPrec(134, 25));

// function isVowel (x){
// 	var vowel = ['a','e','i','o','u']; 

// 	for (var i=0; i<vowel.length ; i++){
// 		if (x === vowel[i]) {
// 			console.log("TRUE");		
// 			return true;
// 		} else if (x === 'y') {
// 			console.log("And sometimes Y!!!");
// 			return true;
// 		} else {
// 			console.log("Falsy Consonant!");
// 			return false;
// 		}
// 	}
// }
// console.log(isVowel('y'));

// function tempCalc(temp){
// 	var input = prompt("Enter \'C\' to convert temp into Celcius or \'F\' to convert into Fahrenheit");
// 		if (input === "C") {
// 			return temp * 1.8 + 32;
// 		} else {
// 			return temp / 1.8 - 32;
// 		}
// }
// console.log(tempCalc(100));

// function bigThree(n1,n2,n3) {
// 	var biggest = 0;
// 	if (n1 > n2 && n1 > n3) {
// 		biggest = n1;
// 	} else if (n2 > n3) {
// 		biggest = n2;
// 	} else {
// 		biggest = n3;
// 	}
// 	return biggest;
// } 
// console.log(bigThree(1,2,99));

var things = [1,2,3,4];

forEach(things, function (thing){
	console.log(thing + 2);
});

function forEach(arr, cb){
	for (i=0; i<arr.length; i++){
	  cb(arr[i]);	
	}
	return arr;
}

















