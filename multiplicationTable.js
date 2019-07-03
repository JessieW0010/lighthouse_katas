const multiplicationTable = function(maxValue) {
  let masterArray = [];
  for (let r = 1; r <= maxValue; r++) {
    let subArray = [];
    for (let c = 1; c <= maxValue; c++) {
      subArray.push(r * c);
    }
    masterArray.push(subArray.join(" "));
  }
  return masterArray.join("\n");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
