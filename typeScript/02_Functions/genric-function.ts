function identity<T>(value: T): T {
  return value;
}

const result2 = identity<string>("Khem"); // "Khem"
console.log(result2);


// can also infer the type:
// const result2 = identity(42); // T inferred as number
