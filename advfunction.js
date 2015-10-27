function getString(str) {
  var result = {};
  
  for (var i = 0; i < str.length; i++) {
  	if (result[str[i]]) {
  		result[str[i]] = result[str[i]] + "|"
  	} else {
  		result[str[i]] + "|"
   }
}
}

getString("hello")

// h: |
// e: |
// l: ||
// o: |
