const arr = [1, 2, 3, 4, 5];

// reduce method
const SumofOddNumbers = arr.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    acc += curr;
  }
  return acc;
}, 0);

console.log(SumofOddNumbers);

// Polyfill of reduce method
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

const SumofOddNumbersUsingPolyfill = arr.myReduce((acc, curr) => {
  if (curr % 2 !== 0) {
    acc += curr;
  }
  return acc;
}, 0);
console.log(SumofOddNumbersUsingPolyfill);
