function greet(name: string): void {
    console.log(`Namste ${name}`)
    // return 19 // will gernerate error
}

greet("KsRawat");
// greet(19); // will gernerate error


// function with default parameters
function log(message: string, level: string = "info"): void {
  console.log(`[${level}] ${message}`);
}

log("Rawat", "onTOP");


// using type alias

type User = { name: string };

function welcome(user: User): string {
  return `Welcome, ${user.name}`;
}
