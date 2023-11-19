// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {};

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  };
  
  
/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {}

const extend = (array1, array2) => {
    return [...array1, ...array2];
  };


/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {}

const addKeyVal = (obj, key, val) => {

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
};

/** Return a new object with a key removed. */

function removeKey(obj, key) {}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
};

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {}

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };


/** Return a new object with a modified key and value. */

function update(obj, key, val) {};

let newObj = { ...obj }
newObj[key] = val;
return newObj;