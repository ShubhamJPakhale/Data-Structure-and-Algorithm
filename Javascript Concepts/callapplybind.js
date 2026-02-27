const printfullname = function (city, state)
{
    console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
}

let person1 = {
    firstname: "John",
    lastname: "Doe"
};

// Using call - function borrows the method and immediately invokes it
printfullname.call(person1, "New York", "NY");
// Using apply - function borrows the method and immediately invokes it, but arguments are passed as an array
printfullname.apply(person1, ["Los Angeles", "CA"]);
// Using bind - return new funtion with the same body and scope but with 'this' keyword set to the provided value, and does not immediately invoke it
const printJohn = printfullname.bind(person1);
printJohn("Chicago", "IL");