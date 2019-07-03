const sumLargestNumbers = function(array) {
  let num1 = array[0]; //first number then replaced by largest number
  let num2 = array[0] //second largest number, initially equal to first number
  for (let i = 1; i <= array.length; i++) {
    if (array[i] > num1) {
      num1 = array[i];
    }
  }
  for (let j = 1; j <= array.length; j++) {
    if (array[j] < num1 && array[j] > num2) {
      num2 = array[j];
    }
  }
  return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); 

