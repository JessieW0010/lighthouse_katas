const makeCase = function(string, style) {
  
  let styledArray = [];

  //create functions for all cases
  //camel
  function camel(string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        styledArray[i] = string[i+1].toUpperCase();
        i++;
      } else {
        styledArray[i] = string[i];
      }
    }
    return styledArray.join("");  //returns a string
  }
  //pascal
  function pascal(string) {
    styledArray[0] = string[0].toUpperCase(); //first letter of string upper
    for (let i = 1; i < string.length; i++) { //starts at second letter
      if (string[i] === " ") {
        styledArray[i] = string[i+1].toUpperCase();
        i++
      } else {
        styledArray[i] = string[i];
      }
    }
    return styledArray.join("");
  }
  //snake
  function snake(string) {
    for (let i = 0; i < string.length; i++) { 
      if (string[i] === " ") {
        styledArray[i] = "_";
      } else {
        styledArray[i] = string[i];
      }
    }
    return styledArray.join("");
  }
  //kebab
  function kebab(string) {
    for (let i = 0; i < string.length; i++) { 
      if (string[i] === " ") {
        styledArray[i] = "-";
      } else {
        styledArray[i] = string[i];
      }
    }
    return styledArray.join("");
  }
  //title
  function title(string) {
    styledArray[0] = string[0].toUpperCase(); //cap first letter of string
    for (let i = 1; i < string.length; i++) { //start on second letter
      if (string[i] === " ") {
        styledArray[i] = string[i] + string[i+1].toUpperCase(); 
        i++;
      } else {
        styledArray[i] = string[i];
      }
    }
    return styledArray.join("");
  }
  //vowel
  function vowel(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (string[i] === vowels[j]) { //if letter is vowel return cap
          styledArray[i] = string[i].toUpperCase();
          break;
        } else {
          styledArray[i] = string[i];
        }
      }
    }
    return styledArray.join("");
  }
  //consonant (basically opposite of vowel function)
  function consonant(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        if (string[i] === vowels[j]) { //if letter is vowe;
          styledArray[i] = string[i];
          break;
        } else {
          styledArray[i] = string[i].toUpperCase(); 
        }
      }
    }
    return styledArray.join("");
  }
  //upper
  function upper(string) {
    for (let i = 0; i < string.length; i ++) {
      styledArray[i] = string[i].toUpperCase();
    }
    return styledArray.join("");
  }
  //lower
  function lower(string) {
    for (let i = 0; i < string.length; i ++) {
      styledArray[i] = string[i].toLowerCase();
    }
    return styledArray.join("");
  }

  //style can be one or two

  function applyStyle(style, string) {
    switch (style) {
      case "camel":
        return camel(string);
        break;
      case "pascal":
        return pascal(string);
        break;
      case "snake":
        return snake(string);
        break;
      case "kebab":
        return kebab(string);
        break;
      case "title":
        return title(string);
        break;
      case "vowel":
        return vowel(string);
        break;
      case "consonant":
        return consonant(string);
        break;
      case "upper":
        return upper(string);
        break;
      case "lower":
        return lower(string);
        break;
    }
  }

  if (!Array.isArray(style)) {        //apply one style
    applyStyle(style, string);
  } else {                            //apply two styles
    let stylesArray = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];
    let styleOrder = [];              //order the styles accordingly
    for (let i = 0; i < stylesArray.length; i ++) {
      for (let j = 0; j < style.length; j ++) {
        if (stylesArray[i] === style[j]) {
          styleOrder.push(stylesArray[i]);
        }
      }
    }
    applyStyle(styleOrder[0], string);
    applyStyle(styleOrder[1], styledArray);
  }
  
  return styledArray.join("");

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal")); 
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant")); 
console.log(makeCase("this is a string", ["upper", "snake"])); 