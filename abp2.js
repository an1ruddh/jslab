let iterations = 10000000;

// Using Set
let set = new Set();
for (let i = 0; i < iterations; i++) {
  set.add(`value${i}`);
}

console.time("Set: Searching values");
for (let i = 0; i < iterations; i++) {
  set.has(`value${i}`);
}
console.timeEnd("Set: Searching values");

// Using Array
let array = [];
for (let i = 0; i < iterations; i++) {
  array.push(`value${i}`);
}

console.time("Array: Searching values");
for (let i = 0; i < iterations; i++) {
  array.includes(`value${i}`);
}
console.timeEnd("Array: Searching values");
