function countLetters(arr) {
    const letterCount = {};
    let mostCommonLetter = "";
    let maxCount = 0;
  
    // Loop through each string in the array
    for (const str of arr) {
      // Convert the string to lowercase to make it case-insensitive
      const lowercaseStr = str.toLowerCase();
  
      // Loop through each character in the string
      for (const char of lowercaseStr) {
        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
          // If the character is not in the letterCount object, initialize it to 1
          if (!letterCount[char]) {
            letterCount[char] = 1;
          } else {
            // Otherwise, increment the count
            letterCount[char]++;
          }
  
          // Check if this letter has the highest count so far
          if (letterCount[char] > maxCount) {
            maxCount = letterCount[char];
            mostCommonLetter = char;
          }
        }
      }
    }
  
    return { ...letterCount, mostCommonLetter };
  }
  
  const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
  const letterCounts = countLetters(array);
  
  console.log("Letter Counts:", letterCounts);
  console.log("Most Common Letter:", letterCounts.mostCommonLetter);
  