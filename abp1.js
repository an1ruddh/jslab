//Application based Problems – Part B
//1. Show how map is different from object to store key value pairs with coding example and prove Maps perform better than objects in most of the scenarios involving addition and removal of keys.      
// Using Map
let map1 = new Map();
map1.set("key1", "value1");
map1.set("key2", "value2");

// Using Object
let obj1 = {};
obj1["key1"] = "value1";
obj1["key2"] = "value2";


//compare
let iterations = 10000;

// Using Map
let map = new Map();
console.time("Map: Adding keys");
for (let i = 0; i < iterations; i++) {
 map.set(`key${i}`,`value${i}`)
}
console.timeEnd("Map: Adding keys");

console.time("Map: Removing keys");
for (let i = 0; i < iterations; i++) {
  map.delete(`key${i}`);
}
console.timeEnd("Map: Removing keys");

// Using Object
let obj = {};
console.time("Object: Adding keys");
for (let i = 0; i < iterations; i++) {
  obj[`key${i}`] = `value${i}`;
}
console.timeEnd("Object: Adding keys");

console.time("Object: Removing keys");
for (let i = 0; i < iterations; i++) {
  delete obj[`key${i}`];
}
console.timeEnd("Object: Removing keys");
