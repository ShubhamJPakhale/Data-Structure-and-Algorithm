const arr = [1, 2, 3, 4, 5];

// slice -
console.log(arr.slice(1, 4)); // [2, 3, 4]

// splice -
arr.splice(1, 2); // [2, 3]
console.log(arr); // [1, 4, 5]

// rest operator - array destructuring - alsways last element in the array
const [first, ...rest] = arr;
console.log(arr); // [1, 4, 5]

// spread operator - n no of elements in to another array
const val = [1, 2, 3, 4, 5, 90, 43, 23, 45, 67, 89];
const spreadArr = [...val, first];
console.log(spreadArr); // [1, 2, 3, 4, 5,90,43,23,45,67,89];
