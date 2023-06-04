//. Write a JavaScript code to insert and remove elements from the array for the given index                            
const array = ["1","3","4","5"]
array.splice(1,0,"2")
console.log(array)
array.splice(1,1)
//splice first elemetn the index u want to insert or delete , 2nd element the number of elements you want to delete,third the element y want to insert
console.log(array)