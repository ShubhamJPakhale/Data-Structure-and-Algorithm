function secondLargest(arr) {
  if (arr.length < 2) {
    return undefined; // Not enough elements for second largest
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === -Infinity) {
    return undefined; // No second largest found
  }

  return secondLargest;
}

const arr = [3, 5, 7, 2, 8];
console.log(secondLargest(arr)); // Output: 7
