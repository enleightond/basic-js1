function getFizzBuzz (value1,value2) {
	for (var i=value1, i <= value2, i++) {
		if (i%3===0 && i%5===0) {
		console.log("FizzBuzz")
		}
	} else if (i%5===0) {
		console.log("Buzz");
	} else if (i%3===0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
  }
}

