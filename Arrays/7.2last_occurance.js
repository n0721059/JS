const inputString = "The more you know, the more you know that you don't know";
const searchWord = "you";

// Split the input string into an array of words
const words = inputString.split(' ');

let lastIndex = -1;

// Iterate through the words to find the last occurrence of the search word
for (let i = 0; i < words.length; i++) {
  if (words[i] === searchWord) {
    lastIndex = i;
  }
}

console.log(`The index of the last occurrence of "${searchWord}" is: ${lastIndex}`);
