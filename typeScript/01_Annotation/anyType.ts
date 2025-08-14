// any -- the wildcard of TypeScript.

let color: any = "crimson"; // ✅ string
color = 20;                 // ✅ number
color = true;               // ✅ boolean
// color();                    // ❌ runtime error if not a function
// color.toUpperCase();        // ❌ runtime error if not a string
console.log(typeof color);         // ✅ logs current value


// use alternative as Using any is like turning off TypeScript’s safety net.
// 1. Unioun
// 2. unknown
// 3. type Gurad