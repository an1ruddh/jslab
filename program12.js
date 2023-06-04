//. Write a JavaScript function.
//a. to capitalize the first letter of each word in a string.
//b. to insert a string within a string at a particular position
//c. to check whether an `input` is a string or not
//d. to split a string and convert it into an array of words.        
function capitalizeFirstLetters(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }
  
  const sentence = "hello world";
  const capitalizedSentence = capitalizeFirstLetters(sentence);
  console.log(capitalizedSentence); // Output: Hello World
                                                             
  function insertStringAtPosition(originalString, insertString, position) {
    return originalString.slice(0, position) + insertString + originalString.slice(position);
  }
  
  const originalString = "Hello, world!";
  const insertString = "beautiful ";
  const position = 7;
  
  const modifiedString = insertStringAtPosition(originalString, insertString, position);
  console.log(modifiedString); // Output: "Hello, beautiful world!"
  function splitIntoWords(str) {
    return str.split(" ");
  }
  
  // Example:
  const sentence1 = "Hello, how are you?";
  const words = splitIntoWords(sentence1);
  console.log(words); // Output: ["Hello,", "how", "are", "you?"]


  function checkIfString(input) {
    return typeof input === "string";
  }
  
  // Examples:
  console.log(checkIfString("Hello")); // Output: true
  console.log(checkIfString(42)); // Output: false
  console.log(checkIfString(true)); // Output: false
  console.log(checkIfString({})); // Output: false
  