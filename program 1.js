//Write a function numTest that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 20.		
function numTest(number) {
    return new Promise((resolve,reject)=>{
        if (number > 20){
            resolve(`${number} is greater than 20`)
        }
        else if(number <20){
            resolve(`${number} is smaller than 20`)
        }
        else{
            reject('it is 20')
        }
    })
}
numTest(26).then(result=>{
    console.log(result)
})