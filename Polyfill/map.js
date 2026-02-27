const arr = [12, 75, 84, 96, 31, 736, 45, 23, 56, 89];

// using map method
const newArr = arr.map((value) => {
  return value * 2;
});
console.log(newArr);

// using polyfill for map method
Array.prototype.myMap = function (callback) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i], i, this));
  }
  return newArr;
};

const newArr2 = arr.myMap((value) => {
  return value * 2;
});
console.log(newArr2);
