const camelCase = function(string) {
  let camelString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      camelString += string[i+1].toUpperCase();
      i++;
    } else {
      camelString += string[i];
    }
  }
  return camelString;
};


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious")); 
