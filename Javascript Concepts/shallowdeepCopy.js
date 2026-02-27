const obj = {
  name: "Shubham",
  companyType: "Product",
  address: {
    city: "Pune",
    state: "Maharashtra",
  },
};

// Shallow Copy
const shallowCopy = { ...obj };
shallowCopy.name = "Shubham Sharma";
shallowCopy.address.city = "Mumbai";
console.log("Shallow Copy:", shallowCopy);
console.log("Original Object after Shallow Copy:", obj);

// deep copy
const deepCopy = structuredClone(obj);
deepCopy.name = "Shubham Sharma";
deepCopy.address.city = "Nashik";

console.log("Deep Copy:", deepCopy);
console.log("Original Object after Deep Copy:", obj);

/* Output:
Shallow Copy: {
  name: 'Shubham Sharma',
  companyType: 'Product',
  address: { city: 'Mumbai', state: 'Maharashtra' }
}
Original Object after Shallow Copy: {
  name: 'Shubham',
  companyType: 'Product',
  address: { city: 'Mumbai', state: 'Maharashtra' }
}

In shallow copy the nested object (address) is shared between the original and the copied object. So when we change the city in the shallow copy, it also changes in the original object.

Deep Copy: {
  name: 'Shubham Sharma',
  companyType: 'Product',
  address: { city: 'Nashik', state: 'Maharashtra' }
}
Original Object after Deep Copy: {
  name: 'Shubham',
  companyType: 'Product',
  address: { city: 'Mumbai', state: 'Maharashtra' }
}

In deep copy, the nested object (address) is completely independent of the original object. So when we change the city in the deep copy, it does not affect the original object.
  */
