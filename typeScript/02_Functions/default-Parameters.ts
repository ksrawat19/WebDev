// Default Parameters
function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

const res = greet();
console.log(res);


// Optional & Default Parameters
function log(message: string, level: string = "info"): void {
  console.log(`[${level}] ${message}`);
}
log("hey is ..");