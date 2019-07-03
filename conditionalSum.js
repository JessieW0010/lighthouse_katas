const conditionalSum = function(array, condition) {
  let sumOdd = 0;
  let sumEven = 0;
  
  array.forEach(function(num, index, array) {
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  })

  if (condition === "even") {
    return sumEven;
  } else if (condition === "odd") {
    return sumOdd;
  } else {
    return "invalid condition";
  }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
