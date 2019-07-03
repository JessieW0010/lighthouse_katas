const urlDecode = function(string) {
  const propArray = string.split("&");

  const returnObj = {};

  for (let i = 0; i < propArray.length; i ++) {       //examine each prop (i)
    for (let j = 0; j < propArray[i].length; j ++) {  //examine each letter (j)
      if (propArray[i][j] === "=") {                  //every prop has one "="
        let propName = propArray[i].slice(0,j);     //slice from start to "="
        let propValue = (propArray[i].slice(j+1)).replace(/%20/gi, " ");    //slice from end of "=" then replace ALL %20 with space
        returnObj[propName] = propValue;
      }
    }
  }
  return returnObj;
};


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather); 
