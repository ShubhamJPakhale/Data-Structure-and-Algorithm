function sum(a) {
  return function (b) {
    if (b === undefined) {
      return a;
    }
    return sum(a + b);
  };
}

console.log(sum(5)(10)(5)(87)(75)());
