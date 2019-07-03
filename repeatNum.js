const repeatNumbers = function(arrayOfArrays) {
  let newArray = []; //array containing the repeated values each as a string
  arrayOfArrays.forEach(function(subArray) {
    let newString = "";
    for (let i = 0; i < subArray[1]; i++) { //i is less than the repeat value
      newString += subArray[0];
    }
    newArray.push(newString);
  });
return newArray;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));