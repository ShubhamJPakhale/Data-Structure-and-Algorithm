const obj = {
  name: "Shubham",
  age: 18,
  say: function () {
    console.log(this.name);
  },
};

// call method
function sayHello() {
  console.log("Hello " + this.name);
}

sayHello.call(obj); // Hello Shubham

// call method with arguments
function introduce(city, country) {
  console.log(
    "My name is " +
      this.name +
      ", I am " +
      this.age +
      " years old, and I live in " +
      city +
      ", " +
      country,
  );
}

introduce.call(obj, "Beijing", "China"); // My name is Shubham, I am 18 years old, and I live in Beijing, China
introduce.apply(obj, ["Shanghai", "China"]); // My name is Shubham, I am 18 years old, and I live in Shanghai, China

// bind method
const introduceShubham = introduce.bind(obj);
introduceShubham("Guangzhou", "China"); // My name is Shubham, I am 18 years old, and I live in Guangzhou, China

// call method with null context
function globalSay() {
  console.log("Hello " + this.name);
}
globalSay.call(null); // Hello undefined (in non-strict mode, this will refer to the global object, which does not have a name property)

// call polyfill -
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};
// Testing the myCall polyfill
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
greet.myCall(obj, "Hi"); // Hi, Shubham

// apply polyfill -
Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};
// Testing the myApply polyfill
greet.myApply(obj, ["Hello"]); // Hello, Shubham

// bind polyfill -
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
// Testing the myBind polyfill
const greetShubham = greet.myBind(obj, "Hey");
greetShubham(); // Hey, Shubham
