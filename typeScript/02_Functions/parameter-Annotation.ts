// Regular Func
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);
console.log(result);

// Arrow function
const product = (num1: number, num2: number)=> num1*num2;
// also
// const multiply: (x: number, y: number) => number = (x, y) => x * y;

const ans = product(2, 4);
console.log(ans);



// Also notice, TypeScript will gives you warning if you provide more or less arguments then you specifiy in your parameters area.

// double(2, 10, 20); // 👈 Warning