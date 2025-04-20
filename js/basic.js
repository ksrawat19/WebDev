// "use strict";
// -----------  V A R I A B L E S ----------- //
{
let x = 19;
var y = 21;
}
const z = 10;

// x = 15;
// y = 31;
// z = 11; error
{
    // console.log(x);
}
{
    // console.log(y);
}
// console.log(z);

// -----------  D A T A - T Y P E S ----------- //

// DataTypes (primitive)
let a = 19;              // Number
let b = "string";        // String
let c = true;            // Boolean
let d = 1.3;             // Number (Floating-point)
let e = null;            // Null
let f;                   // Undefined
let g = Symbol("kujB");  // Symbol
let h = 123n;            // BigInt

// console.log(0 / 0); // NaN
// console.log("Hello" * 5); // NaN
// console.log(parseInt("abc")); // NaN
// console.log(isNaN("Hello")); // true (not a number)
// console.log(isNaN(123)); // false (valid number)

// console.log(a, b, c, d, e, f, g, h);
// console.table([a, b, c, d, e, f, g, h]);
// console.table([typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f), typeof(g), typeof(h)]);

// DataTypes (non-primitive)
let arr = [a, b, c, d, e, f, g, h, "ksrawat"];

// for(let i=0; i<arr.length; i++){
//     console.log(typeof(arr[i]))
// }

let obj = {
    first: "khem",
    second: "singh",
    third: "rawat"
};

// console.log(typeof(obj)); // Outputs: object
// console.log(obj);         // Outputs: { first: "khem", second: "singh", third: "rawat" }
// console.log(obj["first"]); // Outputs: khem
// console.log(obj.first);    // Outputs: khem

// let first = "first";
// console.log(obj[first]);   // Outputs: khem

// for(let key in obj){
//     console.log(key, "->" ,obj[key]);
// }

function greet(){
    console.log("hello");
}
// greet();
// console.log(typeof(greet));

function greet(khem){
    console.log(`hello ${khem}`);
}
// greet("khem");

const hlo = function (){
    console.log("hlo");
}
// hlo();

// (() => console.log("Anonymous function"))(); // Executes immediately

const hey = () => console.log("kaise ho");
// hey();
// console.log(hey);

// -----------  C O N V E R S I O N S ----------- //

// // IMPLICIT
// console.log("5" + 2);     // "52" (Number converted to String)
// console.log("5" - 2);     // 3  (String converted to Number)
// console.log("10" * "2");  // 20 (Strings converted to Numbers)
// console.log("19" / 2);    // 9.5 (Strings converted to Numbers)
// console.log(1 + true);    // 2  (true converted to 1)

// // EXPLICIT
// // to string 
// console.log(String(124))
// console.log((123).toString())
// console.log(122+"")

// // to number
// console.log(Number("124"));    // 124
// console.log(Number("abc"));    // NaN (Not a Number)
// console.log(parseInt("123.5px"));// 123 (Extracts integer)
// console.log(parseFloat("12.5px")); // 12.5 (Extracts float)

// // to boolean
// console.log(Boolean(2));    // true
// console.log(Boolean(0));    // false
// console.log(Boolean(null));    // false
// console.log(Boolean(undefined));    // false
// console.log(Boolean(NaN));    // false
// console.log(Boolean(""));   // false (Empty string)
// console.log(Boolean("hello")); // true (Non-empty string)

// -----------  C O N T R O L- S T A T E M E N T S ----------- //

// // -----  C O N D I T I O N A L S  ----- //
// // if else
let score = 4;
// if(score >= 90) {
//     console.log("Grade: A");
// }else if(score >= 75) {
//     console.log("Grade: B");
// }else {
//     console.log("Grade: C");
// }

// // switch-case
// switch(score){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2")
//         break;
//     case 3:
//         console.log("3");
//     case 4:
//         console.log("4");
//     case 5:
//         console.log("5");
//         break
//     default:
//         console.log("default");
// }

// // -----  T E R N A R Y  ----- //
// (score>=75)? console.log("pass"): console.log("fail")
// const result = (score>=75)? "pass": "fail"
// console.log(result)

// // -----  L O O P S  ----- //
// for(let i=0; i<10; i++){
//     console.log(i);
// }

// let j=9;
// while(j>=0){
//     console.log(`count: ${j}`);
//     j--;
// }

// let k=1;
// do{
//     console.log(`count:- ${k}`)
// }while(k<0)

// The for...of loop iterates over iterable objects like arrays and strings.
let str = "string is string"
let miArr = ["there", "is", 1, 2, 3, 4, "to", "loose"]

// for(let item of str){
//     console.log(item)
// }
// for(let item of miArr){
//     console.log(item)
// }

// The for...in loop iterates over keys in an object.
let obj2 = {
    name: "Khem", 
    age: 25, 
    country: "India"
}

for(let key in obj2){
    // console.log(`${key} -> ${obj2[key]}`)
}

// -----  B R E A K - C O N T I N U E ----- //

// // jump statements
{
    // for (let i = 1; i <= 5; i++) {
    //     if (i === 3) break; // Stops the loop when i is 3
    //     console.log(i);
    // }
    
    // for (let i = 1; i <= 5; i++) {
    //     if (i === 3) continue; // Skips the iteration when i is 3
    //     console.log(i);
    // }
}