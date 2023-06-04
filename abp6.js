//Write an arrow function that will take one parameter weight in Kg. This arrow function will convert Kg to Lbs. Formula is kg*2.2
const convertKgToLbs = (weight) => {
    const lbs = weight * 2.20462; // Conversion factor for kg to lbs
  
    if (lbs > 150) {
      return "obese";
    } else if (lbs >= 100 && lbs <= 150) {
      return "you are ok";
    } else {
      return "underweight";
    }
  };
  
  // Example usage
  console.log(convertKgToLbs(75)); // Output: you are ok
  console.log(convertKgToLbs(90)); // Output: you are ok
  console.log(convertKgToLbs(120)); // Output: you are ok
  console.log(convertKgToLbs(60)); // Output: underweight
  console.log(convertKgToLbs(200)); // Output: obese
                                            