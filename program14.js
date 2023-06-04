/*. Write a JavaScript program to list the properties of a JavaScript object.
Sample object: 
var student = { 
name : "Mohan Kumar", 
Dept : "ISE", 
id : 056 };
Sample Output: Mohan Kumar, ISE, 056    */
var student = {
    name: "Mohan Kumar",
    Dept: "ISE",
    id: 56
  };
  
  var properties = [];
  
  for (var key in student) {
    if (student.hasOwnProperty(key)) {
      properties.push(student[key]);
    }
  }
  
  var output = properties.join(", ");
  console.log(output); // Output: Mohan Kumar, ISE, 56
  