// function format(input: string): string;
// function format(input: number): string;
function format(input: string | number): string {
  return typeof input === "number" ? input.toFixed(2) : input.toUpperCase();
}

const result = format("sss");
console.log(result);