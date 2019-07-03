const urlEncode = function(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      newString += "%20";
    } else {
      newString += string[i];
    }
  }
  return newString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));