// Regular Function
function double1(x: number): number {
  return x * x;
}

const res2 = double1(2);
console.log(res2);

// Using Arrow Functions
const double2 = (x: number): number => x * x;
const res3 = double2(2);
console.log(res3);


// VOID

function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
  // ERROR 👇
  // return message;
}

printMessage("Hello How Are You?");