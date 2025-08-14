// Type Inference

let fullName = "Khem Singh Rawat";
let fullAge = 18;
let isMarry = false;

// will generate error 
// fullName = 19;
// fullAge = "khem";
// isMarry = 1;


// also 
// Function Return Type Inference
// Array Inference

console.log(fullName, fullAge, isMarry);


// -----
// ⚠️ When to Avoid Over-Relying on Inference
// Type inference is powerful, but explicit types are better when:

// You want to document intent clearly
// You’re working with complex objects
// You need function overloads or generic types