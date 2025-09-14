// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Now that we've learned about "module wrapper" that's why we know
// that every file is a module (by default).

// accesing other modules here 
const greet = require('./greet');
const {person1, person2, person3} = require('./people')

greet("pritam");
greet(person1)
greet(person2)
greet(person3)