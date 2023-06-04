//Write a JavaScript code to perform Jump Search for a given key and report success or failure. Prompt the user to enter the key and a list of numbers.
	function JumpSearch(list,key){
        for(let i = 0;i<list.length;i++){
            if(list[i]==key){
                return i;
            }
        }
           return -1       
         }
         //to run the prompt thing we need to use the browser
         const key = parseInt(prompt("enter the key"));
         const list = [1,2,3,4,5,6,7,8,9,10];
         console.log(JumpSearch(list,key));
         /*sample html code attaching
<!DOCTYPE html>
<html>
  <head>
    <title>Prompt Example</title>
  </head>
  <body>
    <h1>Prompt Example</h1>

    <button onclick="getUserInput()">Get User Input</button>

    <script>
      function getUserInput() {
        const userInput = prompt("Enter something:");
        alert("You entered: " + userInput);
      }
    </script>
  </body>
</html>
*/