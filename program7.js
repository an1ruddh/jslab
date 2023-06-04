//Apply JavaScript Arrow function to reverse a given Number. Given Number = 12243; Expected Output: 34221
const reverse = (number)=> {
    var res = 0  
    while(number!==0){

    
    res = res*10 + number%10
      number = Math.floor(number/10)
    }
    return res
}
    const sum = reverse(12345)
    console.log(sum)