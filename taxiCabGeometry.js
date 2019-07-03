const blocksAway = function(direction) {
  
  //const grid = [];
  let position = [0,0];         //initial coordinates
  let rightSwitch = true;
  let leftSwitch = true;

  for (let i = 0; i < direction.length; i ++) {
    //one if statement to move/ change the direction of the taxi
    if (direction[i] === "right") {
      rightChange(direction[i+1]);
    } else if (direction[i] === "left") {
      leftChange(direction[i+1]);
    }

    //one if statement to see if there are two rights/ lefts in a row
    if (direction[i] === direction[i+2]) {
      switchDirection(direction[i]);
    }
    i++;        //skips the number 
  }

  function switchDirection(direction) {
    if (direction === "right") {
      if (rightSwitch === true) {
        rightSwitch = false;
      } else if (rightSwitch === false) {
        rightSwitch = true;
      }
    } else if (direction === "left") {
      if (leftSwitch === true) {
        leftSwitch = false;
      } else if (leftSwitch === false) {
        leftSwitch = true;
      }
    }
  }

  function rightChange(num) {             //right true changes x (array[0])
    if (rightSwitch === true) {
      position[0] += num;
    } else if (rightSwitch === false) {
      position[1] -= num;                 //right false changes y
    }
  }

  function leftChange(num) {
    if (leftSwitch === true) {
      position[1] += num;
    } else if (leftSwitch === false) {
      position[0] -= num;                 //right false changes y
    }
  }

  const navigationObj = {
    east: position[0],
    north: position[1]
  }

  return navigationObj;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1])); 
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1])); 