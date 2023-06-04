//Write a JavaScript code to print all the Disarium numbers between 1 and 100.                                       
// a number whose digits powered to their position and then added gives the same number  for example 135 = 1^1 + 3^2 + 5^3 = 135

function isDisariumNumber(number) {
    const digits = number.toString().split("");
    let sum = 0;
  
    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(parseInt(digits[i]), i + 1);
    }
  
    return sum === number;
  }
  
  function printDisariumNumbers(start, end) {
    console.log(`Disarium numbers between ${start} and ${end}:`);
  
    for (let i = start; i <= end; i++) {
      if (isDisariumNumber(i)) {
        console.log(i);
      }
    }
  }
  
  printDisariumNumbers(1, 100);