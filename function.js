function sum (num1, num2) {
	return (num1 + num2)
}

function isEqual (num1, num2) {
	return (num1 === num2)
}

function isEven (num) {
	return (num%2===0) {
}

function isDivisible (v1, v2) {
	return (v1%v2===0) {
}

function discountPercentage (amount, discount) {
	var totalDiscount = amount * (discount/100);
	if (discount > 100 || discount < 0) {
		return ("WARNING: invalid discount!")
	} else {
		return ("$" + totalDiscount);
	}
}

function isVowel (letter) {
	letter = letter.toLowerCase ();
	var vowels = {}; {
		vowels.a = true;
		vowels.e = true;
		vowels.i = true;
		vowels.o = true;
		vowels.u = true;
	} if (letter === "y") {
		return "and sometimes y."
	} else {
		return false;
	}
}
}

function convert (temp) {
  window.prompt("Enter in a tempature to convert to Fahrenheit")
	return (temp *9 /5) + 32
}

function biggestOfThree (num1, num2, num3) {
	return Math.max(num1,num2,num3)
}

function getIncomeTax(salary) {
	var tax = salary * .25
	return tax;
}