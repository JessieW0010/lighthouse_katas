const numberOfVowels = function(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let numVowels = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) {
        numVowels ++;
      }
    }
  }
  return numVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));