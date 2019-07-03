const squareCode = function(message) {

  const messageArray = [];
  for (let i = 0; i < message.length; i ++) {
    if (message[i]===" ") {
      messageArray.push(message[i+1]);
      i++;
    } else {
      messageArray.push(message[i]);
    }
  }

  const length = messageArray.length;

  let width = Math.ceil(Math.sqrt(length));  //round up
  let height;
  if (length % width !== 0) { //not a perfect square
    height = Math.floor(Math.sqrt(length)); //round down
  } else {
    height = width;
  }
  
  let squareArray = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      squareArray.push(messageArray[0]);
      messageArray.shift();
    }
    squareArray.push("\n");
  }    
  
  return squareArray.join("");

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"))