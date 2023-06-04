//4. Write a program to store values into a map, and to retrieve value from the map using key, to iterate over the map 
const mymap = new Map()
mymap.set("name","ani")
mymap.set("age",10)
mymap.set("address",500)
console.log(mymap.get("name"))
mymap.forEach((value,key) => {
    console.log(`${key}:${value}`)
})