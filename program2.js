//Write a JavaScript code to handle multiple call back functions using JavaScript promises (use promiseobject.then(onfulfilled,onrejected)).		
function asyncTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 1 complete");
        resolve();
      }, 2000);
    });
  }
  
  function asyncTask2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 2 complete");
        resolve();
      }, 1500);
    });
  }
  
  function asyncTask3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 3 complete");
        resolve();
      }, 1000);
    });
  }
  
  asyncTask1()
    .then(() => {
      return asyncTask2();
    }, error => {
      console.error("An error occurred in Task 1:", error);
    })
    .then(() => {
      return asyncTask3();
    }, error => {
      console.error("An error occurred in Task 2:", error);
    })
    .then(() => {
      console.log("All tasks completed successfully.");
    })
    .catch(error => {
      console.error("An error occurred in Task 3:", error);
    });
  