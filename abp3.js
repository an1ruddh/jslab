//Implement a JavaScript promise to perform arithmetic operations. Display result for each operation synchronously using await () method. (Give delay in each promise object using settimeout() method).
function add(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    });
  }
  
  function subtract(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a - b);
      }, 1000);
    });
  }
  
  function multiply(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(a * b);
      }, 1000);
    });
  }
  
  function divide(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (b !== 0) {
          resolve(a / b);
        } else {
          reject("Error: Division by zero");
        }
      }, 1000);
    });
  }
  
  async function performArithmeticOperations() {
    try {
      const result1 = await add(5, 3);
      console.log("Addition:", result1);
  
      const result2 = await subtract(10, 4);
      console.log("Subtraction:", result2);
  
      const result3 = await multiply(7, 2);
      console.log("Multiplication:", result3);
  
      const result4 = await divide(12, 3);
      console.log("Division:", result4);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  performArithmeticOperations();
  