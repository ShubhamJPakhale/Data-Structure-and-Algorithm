function sumOfArray(n) {
    if(n == 0) return arr[0];

    return arr[n] + sumOfArray(n - 1);
}

const arr = [1, 2,2,54,84, 3, 4, 5];
console.log(sumOfArray(arr.length - 1)); 