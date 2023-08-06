// Step 1: Creating the object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
};

console.log('Initial person object:', person);

// Step 2: Adding properties
person.gender = 'Male'; // Using dot notation to add a property
person['occupation'] = 'Engineer'; // Using square bracket notation to add a property

console.log('Person object after adding properties:', person);

// Step 3: Updating properties
person.age = 32; // Updating the age property

console.log('Person object after updating age:', person);

// Step 4: Deleting properties
delete person.city; // Removing the city property

console.log('Person object after deleting city:', person);
