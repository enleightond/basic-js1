var child = {
  height: 3,
  name: "Julian",
  age: 3
};
​
var child = {
  height: 4,
  name: "Cero",
  age: 4
};
​
var ride = {
  minHeight: 3,
  maxHeight: 7
};
​
var ride2 = {
  minHeight: 4,
  maxHeight: 7
};

function isTallEnough(kid, inputRide) {
  if (kid.height >= inputRide.height) {
    return = true;
  }else {
    return = false;
  }
  isTallEnough(child,ride);
}
console.log(isTallEnough)
