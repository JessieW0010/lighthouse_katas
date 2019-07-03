const instructorWithLongestName = function(array) {
  let longestName = "";
  let ind = 0;
  array.forEach(function(num, index) {
    if (num.name.length > longestName.length) {
      longestName = num.name;
      ind = index;
    }
  });
  return array[ind];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); 