//Write an arrow function named sumEvens that accepts an array of numbers and returns the sum of the even numbers in the array. 
const sumEvens = (array) => {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i]%2===0){
            sum = sum+array[i]
        }
    }
        return sum
    }
    const arr = [1,2,4,5,32,52,32]
    console.log(sumEvens(arr))
    console.log(arr[6])