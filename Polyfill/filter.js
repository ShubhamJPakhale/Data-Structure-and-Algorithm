const arr = [1, 2, 3, 4, 5];

// using filter method
const newArr = arr.filter((val) => {
  return val % 2 !== 0;
});
console.log(newArr);

// using polyfill for filter method
Array.prototype.myFilter = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

function isOdd(num) {
  return num % 2 !== 0;
}

const newArr2 = arr.myFilter(isOdd);
console.log(newArr2);
