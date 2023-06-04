//Write a Javascript program where user passes the location and a function is called which returns a promise, if the location passed is Paris Below is the output expected:
//"Let's take a trip to Paris"
//If the location is other than Paris, show the error message "Invalid Location"      
function takeTrip(location) {
    return new Promise((resolve, reject) => {
      if (location === "Paris") {
        resolve("Let's take a trip to Paris");
      } else {
        reject("Invalid Location");
      }
    });
  }
  
  function planTrip(location) {
    takeTrip(location)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  // Example usage
  planTrip("Paris"); // Output: Let's take a trip to Paris
  planTrip("London"); // Output: Invalid Location
  