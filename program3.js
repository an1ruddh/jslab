//Write a program to store values into a set, and to retrieve value from the set, to iterate over the set   
const myset = new Set()
 myset.add('a')
myset.add('b')


myset.forEach(element => {
    console.log(element)
    
});
const array1 = ['a']

for (const value of array1){
    if (array1.includes(value)){
        console.log(value)
    }
}