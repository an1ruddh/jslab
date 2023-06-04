//Write a JavaScript program to book a hotel only after booking a flight.
//[Hint: To achieve this, the promise returned from the bookHotel function is resolved only after resolving the promise from bookFlight function.
   // If the promise gets rejected from bookflight then it won't execute the second function.]                         
   function bookFlight() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        const isFlightBooked = true; // Change to false to simulate a failed booking
  
        if (isFlightBooked) {
          resolve("Flight booked successfully");
        } else {
          reject("Flight booking failed");
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  function bookHotel() {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous operation
      setTimeout(() => {
        const isHotelBooked = true; // Change to false to simulate a failed booking
  
        if (isHotelBooked) {
          resolve("Hotel booked successfully");
        } else {
          reject("Hotel booking failed");
        }
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Usage
  bookFlight()
    .then((flightMessage) => {
      console.log(flightMessage);
      return bookHotel();
    })
    .then((hotelMessage) => {
      console.log(hotelMessage);
    })
    .catch((error) => {
      console.log(error);
    });
  