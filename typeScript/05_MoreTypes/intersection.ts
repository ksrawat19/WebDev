type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password?: string;
};

type User = UserInfo & AccountDetails;

const khem: User = {
  first: "khem",
  last: "rawat",
  age: 18,
  email: "test@gmail.com",
};

console.log(
  `Name: (${khem.first} ${khem.last}) Age: (${khem.age}) Email: (${khem.email}) Password: (${khem.password})`
);