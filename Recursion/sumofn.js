function totalSum(n) {
  if (n == 0) return 0;
  return n + totalSum(n - 1);
}

console.log(totalSum(10)); // Output: 55
