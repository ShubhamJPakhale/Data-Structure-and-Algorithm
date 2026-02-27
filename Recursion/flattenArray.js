const arr = [1, 2, 8, [75, 154, 9], 3, 4, [5, 6, 7], 9, 10];

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenArray(arr));
/* Output:
[
  1, 2, 8, 75, 154, 9, 3, 4, 5, 6, 7, 9, 10
]
*/
