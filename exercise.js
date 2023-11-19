// Q: In this exercise, you’ll refactor some ES5 code into ES2015.

// Given this function:

// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

/* Write an ES2015 Version */

// A: 
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

const findMin = (...args2) => Math.min(...args2)

console.log(findMin(1,4,12,-3)); // -3
console.log(findMin(1,-1)) // -1
console.log(findMin(3,1)) // 1


// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

console.log(mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}


// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args3) => [...arr, ...args3.map(v => v * 2)]

console.log(doubleAndReturnArgs([1,2,3],4,4)); // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4)); // [2, 20, 8]