function sumOfOddArray(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n == 0 && isOdd) {
    return arr[0];
  } else if (n == 0) {
    return 0;
  }

  return (isOdd ? arr[n] : 0) + sumOfOddArray(n - 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumOfOddArray(arr.length - 1));
