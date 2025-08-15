let users: { name: string; age: number }[] = [
  { name: "Khem", age: 25 },
  { name: "Avi", age: 30 },
];

// or using type

type User = { name: string; age: number };

let users2: User[] = [
  { name: "Khem", age: 25 },
  { name: "Avi", age: 30 },
];
