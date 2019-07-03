const organizeInstructors = function(instructorArray) {
  const courseObj = {};

  instructorArray.forEach(function(instructorObj) { //iterates through each obj

    if (!courseObj.hasOwnProperty(instructorObj.course)) { //if courseObj does not have the property of whatever course is iterated create new property with empty array
      courseObj[instructorObj.course] = []; 
    }

    courseObj[instructorObj.course].push(instructorObj.name);

  })

  return courseObj;

};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
